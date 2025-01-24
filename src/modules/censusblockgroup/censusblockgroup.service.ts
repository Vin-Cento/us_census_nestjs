import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CensusBlockGroup } from 'src/database/entities/censusblockgroup.entity';
import { BoundaryDto } from 'src/common/BoundaryDto';

@Injectable()
export class CensusBlockGroupService {
  constructor(
    @Inject('CENSUSBLOCKGROUP_REPOSITORY')
    private censusblockgroupRepository: Repository<CensusBlockGroup>,
  ) {}

  async getCensusBlockGroup(): Promise<CensusBlockGroup[]> {
    const censusData = this.censusblockgroupRepository.find({ take: 1 });
    return censusData;
  }

  async getWithinBoundary(
    boundary: BoundaryDto,
  ): Promise<CensusBlockGroup[]> | null {
    const wkt = this.geojson2wkt(boundary.shape);
    const data = this.censusblockgroupRepository
      .createQueryBuilder('block')
      .addSelect('block.geometry')
      .where('ST_Within(block.geometry, ST_GeomFromEWKT(:wkt))', { wkt })
      .andWhere('block.year = :year', { year: boundary.year })
      .getMany();
    return data
  }

  async getIncomePerCapita(boundary: any): Promise<any[]> | null {
    const wkt = this.geojson2wkt(boundary.shape);
    const data = await this.censusblockgroupRepository
      .createQueryBuilder('block')
      .leftJoinAndSelect('block.incomepercapita', 'incomepercapita')
      .where('ST_Intersects(block.geometry, ST_GeomFromEWKT(:wkt))', {
        wkt,
      })
      .andWhere('block.year = :year', { year: boundary.year })
      .getMany();

    return data;
  }

  async getSexByAge(boundary: any): Promise<any[]> | null {
    const wkt = this.geojson2wkt(boundary.shape);
    const data = await this.censusblockgroupRepository
      .createQueryBuilder('block')
      .leftJoinAndSelect('block.sexbyage', 'sex_by_age')
      .where('ST_Intersects(block.geometry, ST_GeomFromEWKT(:wkt))', {
        wkt,
      })
      .andWhere('block.year = :year', { year: boundary.year })
      .getMany();


    return data;
  }

  geojson2wkt(boundaryGeoJSON: any): string {
    let wkt = 'SRID=4269;MULTIPOLYGON(';
    boundaryGeoJSON.features.forEach((feature: any) => {
      wkt += '(';
      feature.geometry.coordinates.forEach((coordinate: any) => {
        wkt += '(';
        coordinate.forEach((c: number[]) => {
          const str = `${c[0]} ${c[1]},`;
          wkt += str;
        });
        wkt = wkt.slice(0, -1) + ')';
      });
      wkt += '),';
    });
    wkt = wkt.slice(0, -1) + ')';
    return wkt;
  }
}

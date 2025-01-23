import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CensusBlockGroup } from 'src/database/entities/censusblockgroup.entity';

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
    boundaryGeoJSON: any,
  ): Promise<CensusBlockGroup[]> | null {
    const wkt = this.processGeojson(boundaryGeoJSON);
    const data = this.censusblockgroupRepository
      .createQueryBuilder('block')
      .addSelect('block.geometry')
      .where('ST_Within(block.geometry, ST_GeomFromEWKT(:wkt))', { wkt })
      .getMany();
    return data
  }

  async getIncomePerCapita(boundaryGeoJSON: any): Promise<any[]> | null {
    const wkt = this.processGeojson(boundaryGeoJSON);
    const data = await this.censusblockgroupRepository
      .createQueryBuilder('block')
      .leftJoinAndSelect('block.incomepercapita', 'incomepercapita')
      .where('ST_Intersects(block.geometry, ST_GeomFromEWKT(:wkt))', {
        wkt,
      })
      .andWhere('block.year = :year', { year: 2022 })
      .getMany();

    return data;
  }

  async getSexByAge(boundaryGeoJSON: any): Promise<any[]> | null {
    const wkt = this.processGeojson(boundaryGeoJSON);
    const data = await this.censusblockgroupRepository
      .createQueryBuilder('block')
      .leftJoinAndSelect('block.sexbyage', 'sex_by_age')
      .where('ST_Intersects(block.geometry, ST_GeomFromEWKT(:wkt))', {
        wkt,
      })
      .andWhere('block.year = :year', { year: 2022 })
      .getMany();


    return data;
  }

  processGeojson(boundaryGeoJSON: any): string {
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

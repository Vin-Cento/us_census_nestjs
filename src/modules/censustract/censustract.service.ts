import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CensusTract } from '../../database/entities/censustract.entity';

@Injectable()
export class CensusTractService {
  constructor(
    @Inject('CENSUSTRACT_REPOSITORY')
    private censustractRepository: Repository<CensusTract>,
  ) {}

  async getCensusTract(): Promise<CensusTract[]> {
    const censusData = this.censustractRepository.find({ take: 1 });
    return censusData;
  }

  async findWithinBoundary(
    boundaryGeoJSON: any,
  ): Promise<CensusTract[]> | null {
    const wkt = this.processGeojson(boundaryGeoJSON);
    const data = this.censustractRepository
      .createQueryBuilder('censustract')
      .where('ST_Within(censustract.geometry, ST_GeomFromEWKT(:wkt))', { wkt })
      .getMany();
    return data
  }

  async findIncome(boundaryGeoJSON: any): Promise<any[]> | null {
    const wkt = this.processGeojson(boundaryGeoJSON);
    const data = await this.censustractRepository
      .createQueryBuilder('censustract')
      .leftJoinAndSelect('censustract.income', 'income')
      .leftJoinAndSelect('censustract.rent', 'rent')
      .where('ST_Intersects(censustract.geometry, ST_GeomFromEWKT(:wkt))', {
        wkt,
      })
      .getMany();

    return data;
  }

  async findRent(boundaryGeoJSON: any): Promise<any[]> | null {
    const wkt = this.processGeojson(boundaryGeoJSON);
    const data = await this.censustractRepository
      .createQueryBuilder('censustract')
      .leftJoinAndSelect('censustract.rent', 'rent')
      .where('ST_Intersects(censustract.geometry, ST_GeomFromEWKT(:wkt))', {
        wkt,
      })
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

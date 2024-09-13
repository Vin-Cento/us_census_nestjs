import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CensusTract } from './censustract.entity';
import WKT from 'terraformer-wkt-parser';

@Injectable()
export class CensusTractService {
  constructor(
    @Inject('CENSUSTRACT_REPOSITORY')
    private censustractRepository: Repository<CensusTract>,
  ) { }

  async getCensusTract(): Promise<CensusTract[]> {
    let censusData = this.censustractRepository.find({ take: 1 });
    return censusData
  }

  async findWithinBoundary(boundaryGeoJSON: any): Promise<CensusTract[]> | null {
    const boundary = JSON.stringify(boundaryGeoJSON);
    console.log('boundary', boundary)

    let wkt = 'SRID=4269;MULTIPOLYGON ('
    boundaryGeoJSON.features.forEach((feature: any) => { wkt += WKT.convert(feature.geometry).replace('POLYGON', '') });
    wkt = wkt + ')'
    return this.censustractRepository
      .createQueryBuilder('censustract')
      .where('ST_Within(censustract.geometry, ST_GeomFromEWKT(:wkt))', { wkt })
      .getMany();
  }
}

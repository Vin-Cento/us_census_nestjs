import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CensusTract } from './censustract.entity';

@Injectable()
export class CensusTractService {
  constructor(
    @Inject('CENSUSTRACT_REPOSITORY')
    private censustractRepository: Repository<CensusTract>,
  ) { }

  async getCensusTract(): Promise<CensusTract[]> {
    return this.censustractRepository.find({ take: 10 });
  }
}

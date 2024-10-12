import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Income1901 } from '../../database/entities/income1901.entity';

@Injectable()
export class Income1901Service {
  constructor(
    @Inject('INCOME_REPOSITORY')
    private incomeRepository: Repository<Income1901>,
  ) { }

  async getIncome(): Promise<Income1901[]> {
    const incomeData = this.incomeRepository.find({ take: 1 });
    return incomeData;
  }
}

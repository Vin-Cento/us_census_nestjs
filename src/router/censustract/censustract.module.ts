import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import {
  censustractProvider,
  income1901Provider,
} from './censustract.providers';
import { CensusTractService } from './censustract.service';
import { Income1901Service } from './income1901.service';
import { CensusTractController } from './censustract.controller';
import { IncomeController } from './income1901.controller';

@Module({
  imports: [DatabaseModule, CensusTractModule],
  providers: [
    ...censustractProvider,
    ...income1901Provider,
    CensusTractService,
    Income1901Service,
  ],
  controllers: [CensusTractController, IncomeController],
})
export class CensusTractModule { }

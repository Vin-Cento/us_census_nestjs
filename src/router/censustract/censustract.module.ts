import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { censustractProvider } from './censustract.providers';
import { CensusTractService } from './censustract.service';
import { CensusTractController } from './censustract.controller'

@Module({
  imports: [DatabaseModule, CensusTractModule],
  providers: [
    ...censustractProvider,
    CensusTractService,
  ],
  controllers: [CensusTractController]
})
export class CensusTractModule { }

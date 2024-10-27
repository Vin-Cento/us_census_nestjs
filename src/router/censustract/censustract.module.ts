import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { censustractProvider } from './censustract.providers';
import { CensusTractService } from './censustract.service';
import { CensusTractController } from './censustract.controller';
import { CityService } from './city.service';

@Module({
  imports: [DatabaseModule, CensusTractModule],
  providers: [...censustractProvider, CensusTractService, CityService],
  controllers: [CensusTractController],
})
export class CensusTractModule { }

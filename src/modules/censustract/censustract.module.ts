import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { censustractProvider } from './censustract.providers';
import { CensusTractService } from './censustract.service';
import { CensusTractController } from './censustract.controller';
import { LocationController } from '../location/location.controller';
import { LocationService } from '../location/location.service';

@Module({
  imports: [DatabaseModule],
  providers: [...censustractProvider, CensusTractService, LocationService],
  controllers: [CensusTractController, LocationController],
})
export class CensusTractModule {}

import { Module } from '@nestjs/common';
import { CensusTractModule } from './modules/censustract/censustract.module';
import { CensusBlockGroupModule } from './modules/censusblockgroup/censusblockgroup.module';

@Module({
  imports: [CensusTractModule, CensusBlockGroupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

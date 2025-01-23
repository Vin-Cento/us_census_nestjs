import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { censusblockgroupProvider } from '../../database/database.providers';
import { CensusBlockGroupService } from './censusblockgroup.service';
import { CensusBlockGroupController } from './censusblockgroup.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...censusblockgroupProvider, CensusBlockGroupService],
  controllers: [CensusBlockGroupController],
})
export class CensusBlockGroupModule {}

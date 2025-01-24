import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CensusBlockGroup } from 'src/database/entities/censusblockgroup.entity';
import { CensusBlockGroupService } from './censusblockgroup.service';
import { BoundaryDto } from 'src/common/BoundaryDto';

@Controller('block')
export class CensusBlockGroupController {
  constructor(
    private readonly censusBlockGroupService: CensusBlockGroupService,
  ) {}

  @Post('within-boundary')
  async getWithinBoundary(
    @Body() boundary: BoundaryDto,
  ): Promise<CensusBlockGroup[]> | null {
    return this.censusBlockGroupService.getWithinBoundary(boundary);
  }

  @Post('sex-by-age')
  async getSexByAge(
    @Body() boundary: BoundaryDto,
  ): Promise<CensusBlockGroup[]> | null {
    return this.censusBlockGroupService.getSexByAge(boundary);
  }

  @Post('income-per-capita')
  async getIncomePerCapita(
    @Body() boundary: BoundaryDto,
  ): Promise<CensusBlockGroup[]> | null {
    return this.censusBlockGroupService.getIncomePerCapita(boundary);
  }
}

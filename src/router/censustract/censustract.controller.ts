import { Body, Controller, Get, Post } from '@nestjs/common';
import { CensusTractService } from './censustract.service';
import { CensusTract } from '../../database/entities/censustract.entity';

@Controller('tracts')
export class CensusTractController {
  constructor(private readonly censusTractService: CensusTractService) {}

  @Get('all')
  getAll(): Promise<CensusTract[]> {
    return this.censusTractService.getCensusTract();
  }

  @Post('within-boundary')
  async findWithinBoundary(
    @Body('boundary') boundary: any,
  ): Promise<CensusTract[]> | null {
    return this.censusTractService.findWithinBoundary(boundary);
  }

  @Post('income')
  async findIncome(@Body('boundary') boundary: any): Promise<any[]> | null {
    return this.censusTractService.findIncome(boundary);
  }
}

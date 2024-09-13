import { Body, Controller, Get, Post } from '@nestjs/common';
import { CensusTractService } from './censustract.service';
import { CensusTract } from './censustract.entity';

@Controller("tracts")
export class CensusTractController {
  constructor(
    private readonly censusTractService: CensusTractService,
  ) { }

  @Get('all')
  getHello(): Promise<CensusTract[]> {
    return this.censusTractService.getCensusTract();
  }

  @Post('within-boundary')
  async findWithinBoundary(@Body('boundary') boundary: any): Promise<CensusTract[]> | null {
    return this.censusTractService.findWithinBoundary(boundary);
  }
}

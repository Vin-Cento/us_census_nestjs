import { Controller, Get } from '@nestjs/common';
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
}

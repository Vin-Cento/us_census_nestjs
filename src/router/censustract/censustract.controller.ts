import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CensusTractService } from './censustract.service';
import { CensusTract } from '../../database/entities/censustract.entity';
import { CityService } from './city.service';

@Controller('tracts')
export class CensusTractController {
  constructor(
    private readonly censusTractService: CensusTractService,
    private readonly cityService: CityService,
  ) { }

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

  @Post('income/mode')
  async findModeIncome(@Body('boundary') boundary: any): Promise<any[]> | null {
    return this.censusTractService.findModeIncome(boundary);
  }

  @Post('income')
  async findIncome(@Body('boundary') boundary: any): Promise<any[]> | null {
    return this.censusTractService.findIncome(boundary);
  }

  @Get('search/county/:searchQuery')
  async searchCounty(
    @Param('searchQuery') searchQuery: string,
  ): Promise<any[]> | null {
    return this.censusTractService.listCounty(searchQuery);
  }

  @Get('search/city/:searchQuery')
  async searchCity(
    @Param('searchQuery') searchQuery: string,
  ): Promise<any[]> | null {
    console.log('searchQuery', searchQuery);
    return this.cityService.listCity(searchQuery);
  }
}

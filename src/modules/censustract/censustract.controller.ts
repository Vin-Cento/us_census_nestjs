import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CensusTractService } from './censustract.service';
import { CensusTract } from '../../database/entities/censustract.entity';
import { LocationService } from '../location/location.service';

@Controller('tracts')
export class CensusTractController {
  constructor(
    private readonly censusTractService: CensusTractService,
    private readonly locationService: LocationService,
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

  @Post('income')
  async findIncome(@Body('boundary') boundary: any): Promise<any[]> | null {
    return this.censusTractService.findIncome(boundary);
  }

  @Post('rent')
  async findRent(@Body('boundary') boundary: any): Promise<any[]> | null {
    return this.censusTractService.findRent(boundary);
  }

  // @Get('search/county/:searchQuery')
  // async searchCounty(
  //   @Param('searchQuery') searchQuery: string,
  // ): Promise<any[]> | null {
  //   return this.locationService.listCounty(searchQuery);
  // }

  @Get('search/city/:searchQuery')
  async searchCity(
    @Param('searchQuery') searchQuery: string,
  ): Promise<any[]> | null {
    console.log('searchQuery', searchQuery);
    return this.locationService.listCity(searchQuery);
  }
}

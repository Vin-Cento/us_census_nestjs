import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { CensusTractService } from '../censustract/censustract.service';

@Controller('location')
export class LocationController {
  constructor(
    private readonly cityService: LocationService,
    private readonly censusTractService: CensusTractService,
  ) {}

  // @Get('search/county/:searchQuery')
  // async searchCounty(
  //   @Param('searchQuery') searchQuery: string,
  // ): Promise<any[]> | null {
  //   return this.censusTractService.listCounty(searchQuery);
  // }

  @Get('search/city/:searchQuery')
  async searchCity(
    @Param('searchQuery') searchQuery: string,
  ): Promise<any[]> | null {
    console.log('searchQuery', searchQuery);
    return this.cityService.listCity(searchQuery);
  }
}

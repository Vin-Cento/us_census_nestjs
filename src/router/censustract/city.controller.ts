import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from '../../database/entities/city.entity';

@Controller('income')
export class IncomeController {
  constructor(private readonly cityService: CityService) { }

  @Get('')
  getIncome(): Promise<City[]> {
    return this.cityService.listCity("");
  }

  // @Post('within-boundary')
  // async findWithinBoundary(
  //   @Body('boundary') boundary: any,
  // ): Promise<Income1901[]> | null {
  //   return this.censusTractService.findWithinBoundary(boundary);
  // }
}

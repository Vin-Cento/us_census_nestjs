import { Body, Controller, Get, Post } from '@nestjs/common';
import { Income1901Service } from './income1901.service';
import { Income1901 } from '../../database/entities/income1901.entity';

@Controller('income')
export class IncomeController {
  constructor(private readonly income1901Service: Income1901Service) { }

  @Get('')
  getIncome(): Promise<Income1901[]> {
    return this.income1901Service.getIncome();
  }

  // @Post('within-boundary')
  // async findWithinBoundary(
  //   @Body('boundary') boundary: any,
  // ): Promise<Income1901[]> | null {
  //   return this.censusTractService.findWithinBoundary(boundary);
  // }
}

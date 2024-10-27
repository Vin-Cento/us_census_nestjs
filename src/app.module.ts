import { Module } from '@nestjs/common';
import { CensusTractModule } from './router/censustract/censustract.module';

@Module({
  imports: [CensusTractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

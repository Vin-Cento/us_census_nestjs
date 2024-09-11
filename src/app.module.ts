import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CensusTractModule } from './entities/censustract.module';
// import { CensusTractService } from './entities/censustract.service';

@Module({
  imports: [CensusTractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

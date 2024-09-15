import { Module } from '@nestjs/common'
// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CensusTractModule } from './router/censustract/censustract.module';
// import { CensusTractService } from './entities/censustract.service';

@Module({
  imports: [CensusTractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(CorsMiddleware).forRoutes('*')
//   }
// }

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });

  const config = new DocumentBuilder()
    .setTitle('CensusData')
    .setDescription('Census Data API')
    .setVersion('1.0')
    .addTag('CensusData')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(documentFactory()));
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(8080);
}
bootstrap();

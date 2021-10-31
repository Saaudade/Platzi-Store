import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina los campos extras y los ignora
      forbidNonWhitelisted: true, // Da a conocer la alerta
    }),
  );
  await app.listen(3000);
}
bootstrap();

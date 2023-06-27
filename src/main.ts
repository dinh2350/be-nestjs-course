import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'debug', 'warn'],
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  new Logger('bootstrap').debug(`App run on port : ${port}`);
  await app.listen(port);
}
bootstrap();

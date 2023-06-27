import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  ConfigModule,
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabasesModule } from './modules/databases/databases/databases.module';
@Module({
  imports: [NestConfigModule.forRoot(), DatabasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

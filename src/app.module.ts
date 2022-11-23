import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { UsersModule } from './users/users.module';


@Module({
  imports: [MongooseModule.forRoot(config().parsed.MONGODB_URL), MoviesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

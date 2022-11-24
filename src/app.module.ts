import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { UsersModule } from './users/users.module';


@Module({
  imports: [MongooseModule.forRoot(config().parsed.MONGODB_URL), MoviesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

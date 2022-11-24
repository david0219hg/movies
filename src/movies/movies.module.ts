import { Module } from '@nestjs/common';
import { ApiToDBService, MoviesService } from './movies.service';
import { ApiToDBController, MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]), 
  ],
  controllers: [MoviesController, ApiToDBController],
  providers: [MoviesService, ApiToDBService]
})
export class MoviesModule {}

import { Module } from '@nestjs/common';
import { ApiToDBService, MoviesService, FavoriteMovieService, MovieNoteService } from './movies.service';
import { ApiToDBController, MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoriteMovie, FavoriteMovieSchema, Movie, MovieNote, MovieNoteSchema, MovieSchema } from './schemas/movie.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }, 
      {name: FavoriteMovie.name, schema: FavoriteMovieSchema}, 
      {name: MovieNote.name, schema: MovieNoteSchema}]), 
  ],
  controllers: [MoviesController, ApiToDBController],
  providers: [MoviesService, ApiToDBService, FavoriteMovieService, MovieNoteService]
})
export class MoviesModule {}

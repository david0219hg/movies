import { Get, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model } from 'mongoose';
import fetch from 'node-fetch';
@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private readonly MovieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.MovieModel.create(createMovieDto);
  }

  async findAll() {
    return this.MovieModel.find().exec();
  }

  async findOne(query: { title: string }): Promise<Movie> {
    return this.MovieModel.findOne({ title: query.title }).exec();
  }

  async findpopular(){
    return this.MovieModel.find().sort('popular').exec();
  }
}

@Injectable()
export class ApiToDBService {
  constructor(
    @InjectModel(Movie.name) private readonly MovieModel: Model<MovieDocument>,
  ) {}
  @Get()
  async migrateExternalApiToDB() {
    const moviesArray: Array<Object> = Array(0);
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=13d5efcce523f6a6a9295002a762efa2&language=en-US&page=1',
        {method: 'GET'});

    const objectResponse: Object = response.json().then(response => {
   
      for (const movie of response['results']){
        moviesArray.push({
          genres: movie.genre_ids,
          OriginalLanguage: movie.original_language,
          overview: movie.overview,
          popularity: movie.popularity,
          title: movie.title,
          posterPath: movie.poster_path,
          video: movie.video,
          releaseDate: movie.release_date,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count
        });
      }
      this.MovieModel.insertMany(moviesArray);
    });
    
    return this.MovieModel.find().exec()
  }
}
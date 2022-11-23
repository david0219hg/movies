import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { query } from 'express';

@Injectable()
export class MoviesService {

  constructor( 
    @InjectModel(Movie.name) private readonly MovieModel: Model<MovieDocument>, 
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie>  {
    return  this.MovieModel.create(createMovieDto);
  }

  findAll() {
    return this.MovieModel.find().exec();
  }

  async findOne(query: { title: string }): Promise<Movie> { 
    return this.MovieModel.findOne({ title: query.title}).exec(); 
  }
}

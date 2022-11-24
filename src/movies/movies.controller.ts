import { Controller, Get, Post, Body, Query, Param} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'; ;
import { MoviesService,  ApiToDBService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
@Controller('movies')
@ApiTags('movie') 

export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  find(@Query() query: { title: string }) {
    return (Object.keys(query).length === 0 ? this.moviesService.findAll() : this.moviesService.findOne(query));
  }

  @Get('/popular')
  findPopular() {
    return this.moviesService.findpopular()
  }

}


@Controller('api-to-DB')
@ApiTags('api-to-DB') 
export class  ApiToDBController{
  constructor(private readonly ApiToDBService: ApiToDBService) {}
  @Get()
  migrateExternalApiToDB() {
    return this.ApiToDBService.migrateExternalApiToDB()
  }
    
}
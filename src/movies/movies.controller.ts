import { Controller, Get, Post, Body, Query, Patch, Param} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'; ;
import { MoviesService,  ApiToDBService, FavoriteMovieService, MovieNoteService } from './movies.service';
import { CreateFavoriteMovieDto, CreateMovieDto, CreateMovieNoteDto} from './dto/create-movie.dto';
@Controller('movies')
@ApiTags('movie') 

export class MoviesController {
  constructor(private readonly moviesService: MoviesService, private readonly favoriteMovieService: FavoriteMovieService, 
    private readonly movieNoteService: MovieNoteService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  find(@Query() query: { title: string }) {
    return (Object.keys(query).length === 0 ? this.moviesService.findAll() : this.moviesService.findOne(query));
  }

  @Get('/popular')
  findPopulars() {
    return this.moviesService.findpopular()
  }

  @Get('/favorite')
  findFavorites(){
    return this.favoriteMovieService.findFavorites()
  }

  @Post('/favorite')
  createFavorite(@Body() CreateFavoriteMovieDto: CreateFavoriteMovieDto){
    return this.favoriteMovieService.createFavorite(CreateFavoriteMovieDto)
  }

  @Post('/note')
  createNote(@Body() CreateMovieNoteDto: CreateMovieNoteDto){
    return this.movieNoteService.createNote(CreateMovieNoteDto)
  }

  @Get('/note')
  findNotes(){
    return this.movieNoteService.findNotes()
  }

  @Patch('/note/:id')
  update(@Param('id') id: string, @Body() body: Object) {
    return this.movieNoteService.updateTitle(id, body['noteTitle']); 
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
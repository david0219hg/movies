import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
    @Prop()
    movieAplid: string | null
    @Prop()
    MovieIDMBid: string | null
    @Prop()
    languages: string | null
    @Prop()
    genres: number[]
    @Prop()
    OriginalLanguage: string
    @Prop()
    title: string
    @Prop()
    overview: string | null
    @Prop()
    popularity: string
    @Prop()
    posterPath: string
    @Prop()
    releaseDate: string
    @Prop()
    video: boolean
    @Prop()
    voteAverage: number
    @Prop()
    voteCount: number
}

export const MovieSchema = SchemaFactory.createForClass(Movie); 

export type FavoriteMovieDocument = FavoriteMovie & Document;

@Schema()
export class FavoriteMovie {
    @Prop()
    movieId: string
    @Prop()
    userId: string
    @Prop()
    createdAt: string
}

export const FavoriteMovieSchema = SchemaFactory.createForClass(FavoriteMovie); 

export type MovieNoteDocument = MovieNote & Document;

@Schema()
export class MovieNote {
    @Prop()
    movieId: string
    @Prop()
    userId: string
    @Prop()
    noteTitle: string
    @Prop()
    description: string
    @Prop()
    createdAt: string
    @Prop()
    urlImage: string | null
}

export const MovieNoteSchema = SchemaFactory.createForClass(MovieNote); 


import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
    @Prop()
    movieAplid: string
    @Prop()
    MovieIDMBid: string | null
    @Prop()
    languages: string
    @Prop()
    genres: string
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


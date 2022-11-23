import { ApiProperty } from '@nestjs/swagger';
export class CreateMovieDto {
    @ApiProperty({ 
        example: 'example',
      })
    movieAplid: string;
    @ApiProperty({ 
        example: 'example',
      })
    MovieIDMBid: string;
    @ApiProperty({ 
        example: 'Spanish',
      })
    languages: string;
    @ApiProperty({ 
        example: 'Male',
      })
    genres: string;
    @ApiProperty({ 
        example: 'Spanish',
      })
    OriginalLanguage: string;
    @ApiProperty({ 
        example: '100 years of solitude',
      })
    title: string;
    @ApiProperty({ 
        example: 'example',
      })
    overview: string;
    @ApiProperty({ 
        example: 12.150474,
      })
    popularity: number;
    @ApiProperty({ 
        example: '//path',
      })
    posterPath: string;
    @ApiProperty({ 
        example: '2022-01-01',
      })
    releaseDate: string;
    @ApiProperty({ 
        example: false,
      })
    video: boolean;
    @ApiProperty({ 
        example: 100,
      })
    voteAverage: number;
    @ApiProperty({ 
        example: 200,
      })
    voteCount: number;
}

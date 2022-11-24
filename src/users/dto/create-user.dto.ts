import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty({ 
        example: 'david',
      })
    name: string;
}

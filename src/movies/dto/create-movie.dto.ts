import { IsArray, IsString, MinLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MinLength(1)
  title: string;
  @IsString()
  @MinLength(1)
  image: string;
  @IsString()
  @MinLength(1)
  description: string;
  @IsString()
  @MinLength(1)
  language: string;
  @IsString({ each: true })
  @IsArray()
  @MinLength(1)
  genre: string[];
  @IsString()
  @MinLength(1)
  critic: string;
}
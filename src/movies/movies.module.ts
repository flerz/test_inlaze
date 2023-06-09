import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Movie, Genre } from './entities';
import { UsersModule } from 'src/users/users.module';
import { CriticsModule } from 'src/critics/critics.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [
    TypeOrmModule.forFeature([Movie, Genre]),
    AuthModule,
    UsersModule,
    CriticsModule,
  ],
})
export class MoviesModule {}

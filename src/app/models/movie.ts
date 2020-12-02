import { Time } from '@angular/common';
import { stringify } from 'querystring';

export class Movie{

  id: number;
  title: string;
  moviePoster: string;
  genreId: number;
  genre?: string;
  details?: string;
  duration: string;
  releaseDate: Date;
  ageRating?: number;

}

import { Time } from '@angular/common';
import { stringify } from 'querystring';

export class Movie{

  id: number;
  title: string;
  moviePoster: string;
  genre: string;
  details?: string;
  duration: string;
  releaseDate: Date;

}

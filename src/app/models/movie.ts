import { Time } from '@angular/common';

export class Movie{
  id: number;
  title: string;
  moviePoster: string;
  genre: string;
  details?: string;
  duration: Time;
  releaseDate: Date;

}

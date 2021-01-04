import { Movie } from './movie';
import { Theater } from './theater';

export class Show{
  id : number;
  movieId : number;
  movie : Movie = new Movie();
  theaterId? : number;
  theater? : Theater = new Theater();
  showTime : Date;
}

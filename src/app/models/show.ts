import { Theater } from './theater';

export class Show{
  id : number;
  movieId : number;
  theater : Theater = new Theater();
  showTime : Date;
}

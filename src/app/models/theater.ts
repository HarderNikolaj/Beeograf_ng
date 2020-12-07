import { Seat } from './seat';

export class Theater{
  id : number;
  name : string;
  seats? : Seat[];
  rowsArray? : number [];
}

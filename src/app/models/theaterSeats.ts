import { Seat } from './seat';

export class TheaterSeats{
  id: number;
  seats: Seat[] = [];
  occupiedSeats : number[];
}

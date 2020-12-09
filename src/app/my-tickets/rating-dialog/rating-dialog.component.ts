import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent implements OnInit {

  rating : number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {rating : Rating}) {
      this.rating = data.rating.rating1;
   }

  ngOnInit(): void {
  }

  onRatingChange(event){
    console.log(event);
    this.rating = event.rating;
  }
}

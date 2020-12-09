import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {rating : Rating}) { }

  ngOnInit(): void {
  }

}

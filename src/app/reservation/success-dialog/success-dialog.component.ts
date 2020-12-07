import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {quantity : number}) { }

  message : string = 'Du har nu booket ' + this.data.quantity;

  ngOnInit(): void {
    this.message += this.data.quantity === 1
      ? ' billet'
      : ' billetter';
  }

}

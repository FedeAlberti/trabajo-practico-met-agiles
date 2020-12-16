import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  image:any;
  class: string;


  constructor(@Inject (MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<MatConfirmDialogComponent>) { }

  ngOnInit(): void {
    this.setDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  setDialog(){
    if(this.data.modo === "win") {
      this.image = "../../assets/img/winner.png";
      this.class = "win";
    }
    else {
      this.image = "../../assets/img/6.jpg";
      this.class = "lose";
    }
  }

}

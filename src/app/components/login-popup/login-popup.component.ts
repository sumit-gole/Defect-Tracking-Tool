import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginPopupComponent>
  ) {}

  ngOnInit(): void {}

  cancel(){
    this.dialogRef.close(true);
  }

}

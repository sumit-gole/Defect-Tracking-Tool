import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public invalidLogin = false;
  //private formsSubmitAttempt = false;

  username = "";
  password ="";
  errorMessage = "Invalid Credentials";

  constructor(
    private router: Router,
    private login: LoginService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {}

  handleLogin(){
    if(this.login.authenticate(this.username,this.password)){
      Swal.fire('Congratulations!', 'Login Successfully. Redirecting To Your Dashboard.','success');
      this.router.navigate(['dashboard']);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin = true;
      this.dialog.open(LoginPopupComponent);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;
  user: any = null;  //user = null;

  constructor(
    private router: Router,
    public loginService: LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.loginService.logout();
    
    //window.location.reload();
    this.router.navigate(['login']);
  }


}

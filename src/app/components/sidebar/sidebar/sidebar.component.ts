import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    this.loginService.logout();
    //window.location.reload();
    this.router.navigate(['login']);
  }

}

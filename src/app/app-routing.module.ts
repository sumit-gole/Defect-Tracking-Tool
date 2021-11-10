import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateDefectComponent } from './components/defect/create-defect/create-defect.component';
import { ListDefectComponent } from './components/defect/list-defect/list-defect.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserAuthGuard } from './services/userAuthGuard/user-auth.guard';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path:'createDefect', 
    component: CreateDefectComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path:'listDefect', 
    component: ListDefectComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

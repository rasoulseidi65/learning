import { IndexComponent } from './dashboard/index/index.component';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'', component:AdminLayoutComponent,children:[
    {path:'',component:IndexComponent}
  ]},
  {path:'auth',component:AuthLayoutComponent,children:[
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'forget-password',component:ForgotPasswordComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

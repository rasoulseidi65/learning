import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NavigationComponent } from './admin-layout/navigation/navigation.component';

@NgModule({
  declarations: [AdminLayoutComponent, AuthLayoutComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }

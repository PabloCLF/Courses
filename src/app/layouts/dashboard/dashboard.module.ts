import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    UsersModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

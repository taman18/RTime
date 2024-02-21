import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared-table/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { UserManagementComponent } from './user-management/user-management.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TimesheetComponent,
    UserBioComponent,
    UserManagementComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

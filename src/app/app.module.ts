import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared-table/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserManagementComponent } from './user-management/user-management.component';



@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    NavbarComponent,
    LoginComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

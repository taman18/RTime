import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-table/shared.module';
import { UserManagementComponent } from './user-management/user-management.component';
@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
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

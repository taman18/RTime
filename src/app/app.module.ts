import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from './theme.service';
import { MatIconModule } from '@angular/material/icon';
// import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    DashboardModule
  ],
  providers: [ThemeService],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

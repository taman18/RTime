import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from './services/theme.service';
import { MatIconModule } from '@angular/material/icon';
// import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    DashboardModule,
    SharedModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule

  ],
  providers: [ThemeService],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

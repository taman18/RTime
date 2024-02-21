import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagementModule } from './user-management/user-management.module';


@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    ProfileComponent,
    UserManagementComponent,
    TimesheetComponent,
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
    MatInputModule,
    UserManagementModule,
  ],
  providers: [ ThemeService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

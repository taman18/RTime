import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardService } from './services/dashboard.service';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './services/shared.service';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
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
    HttpClientModule,
  ],
  providers: [ ThemeService, SharedService, DropdownService, DashboardService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './modules/screens/dashboard/dashboard.module';
import { DashboardService } from './services/dashboard.service';
import { DropdownService } from './services/dropdown.service';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgModule } from '@angular/core';
import { ProfileComponent } from './modules/shared/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './services/shared.service';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './modules/shared/theme-toggle/theme-toggle.component';
// import { TimesheetComponent } from './modules/screens/timesheet/timesheet.component';
// import { UserBioComponent } from './modules/screens/user-bio/user-bio.component';
// import { UserManagementComponent } from './modules/screens/user-management/user-management.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagementModule } from './modules/screens/user-management/user-management.module';



@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    ProfileComponent,
    UserManagementComponent,
    TimesheetComponent,
    UserBioComponent,
    LoginComponent,
    TimesheetComponent,
    UserBioComponent,
    UserManagementComponent,
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
    MatSortModule,
    MatTableModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
  ],
  providers: [ ThemeService, SharedService, DropdownService, DashboardService ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }

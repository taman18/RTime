import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './modules/screens/dashboard/dashboard.module';
import { DashboardService } from './services/dashboard.service';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './modules/shared/loader/loader.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './services/shared.service';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './modules/shared/theme-toggle/theme-toggle.component';
import { TimesheetComponent } from './modules/screens/timesheet/timesheet.component';
import { ToastrModule } from 'ngx-toastr';
import { UserBioComponent } from './modules/screens/user-bio/user-bio.component';
import { UserManagementModule } from './modules/screens/user-management/user-management.module';


@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    TimesheetComponent,
    UserBioComponent,
    LoginComponent,
    TimesheetComponent,
    UserBioComponent,
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
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    MatSortModule,
    MatTableModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,

  ],
  providers: [ ThemeService, SharedService, DropdownService, DashboardService ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }

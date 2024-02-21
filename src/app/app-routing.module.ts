import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usermanagement', component: UserManagementComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

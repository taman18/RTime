import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './modules/screens/dashboard/dashboard.component';
// import { LoginComponent } from './modules/shared/login/login.component';
// import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './modules/shared/profile/profile.component';
// import { TimesheetComponent } from './modules/screens/timesheet/timesheet.component';
// import { UserManagementComponent } from './modules/screens/user-management/user-management.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'userbio/:id', component: UserBioComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'timesheet', component: TimesheetComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {

}


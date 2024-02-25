import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { UserManagementComponent } from './user-management/user-management.component';



const routes: Routes = [
  { path: 'login', component:  LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'userbio/:id', component: UserBioComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'timesheet', component: TimesheetComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {

}

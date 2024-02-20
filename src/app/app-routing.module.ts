
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserManagementComponent } from './user-management/user-management.component';
const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
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

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule { }

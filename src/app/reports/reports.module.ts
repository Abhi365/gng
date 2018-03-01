import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverallReportComponent } from './overall-report/overall-report.component';
import { OeeReportComponent } from './oee-report/oee-report.component';
import { CustomReportComponent } from './custom-report/custom-report.component';
import { LossDetailsReportComponent } from './loss-details-report/loss-details-report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OverallReportComponent, OeeReportComponent, CustomReportComponent, LossDetailsReportComponent]
})
export class ReportsModule { }

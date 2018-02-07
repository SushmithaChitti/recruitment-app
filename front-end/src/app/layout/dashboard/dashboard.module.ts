import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DashboardRoutingModule,
    AngularFontAwesomeModule
    // HomeComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }









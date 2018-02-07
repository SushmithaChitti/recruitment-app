import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StatusComponent } from './status.component';
import { StatusRoutingModule } from './status-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    StatusRoutingModule,
    AngularFontAwesomeModule
    // HomeComponent
  ],
  declarations: [StatusComponent]
})
export class StatusModule { }









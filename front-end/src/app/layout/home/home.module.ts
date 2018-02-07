import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule.forRoot() 
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

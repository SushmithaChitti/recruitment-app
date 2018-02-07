import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
// import { ModalComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    SignupRoutingModule
  ],
  declarations: [
    SignupComponent
  // ModalComponent
]
})
export class SignupModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
// import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
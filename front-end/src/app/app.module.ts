import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    // AngularFontAwesomeModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // import { HttpClientModule, HttpClient } from '@angular/common/http';

// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// // AoT requires an exported function for factories
// export function createTranslateLoader() {
//     // for development
//     // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
  
// }

// @NgModule({
//     imports: [
//         CommonModule,
//         BrowserModule,
//         // BrowserAnimationsModule,
//         // HttpClientModule,
//         AppRoutingModule,
        
//     ],
//     declarations: [AppComponent, LoginComponent, HomeComponent],
//     bootstrap: [AppComponent]
// })
// export class AppModule {}

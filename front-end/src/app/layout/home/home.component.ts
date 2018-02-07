import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    
  }
  
  // openNav(){
  //   document.getElementById("mySidenav").style.width = "300px";
  //   document.getElementById("main").style.marginLeft = "300px";
  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // }

  // closeNav(){
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  //   document.body.style.backgroundColor = "white";
  // }

//   Referral(){
//     // console.log("sample");
//     this.router.navigateByUrl('/dashboard');

// }
//   Status(){
   
//     this.router.navigateByUrl('/status');

// }
}

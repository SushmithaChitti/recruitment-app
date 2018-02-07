import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(public router: Router) { 
    // this.showWindow();
  }
  // showWindow(){
  //   console.log("Sample Works");
  // }
  // myFunc():void{
  //   console.log("Works");
  // }
  ngOnInit() {
  }

 backtohome(){
    // console.log("sample");
    this.router.navigateByUrl('/home');

}

draft(){
  alert("Are You Sure You Need to Save this file");
  // if((click)=="true"){
  //   console.log("sample");
  //   alert("sample Success");
  // }
}

}


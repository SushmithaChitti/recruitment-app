import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
  }
}


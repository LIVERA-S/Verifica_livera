import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {
  terzo:string;
  constructor() { 
    this.terzo = 'terzo';
  }

  ngOnInit(): void {
  }

}

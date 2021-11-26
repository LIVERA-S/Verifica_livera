import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-comp',
  templateUrl: './fourth-comp.component.html',
  styleUrls: ['./fourth-comp.component.css']
})
export class FourthCompComponent implements OnInit {
   quarto:string;
  constructor() { 
    this.quarto = 'quarto'
  }

  ngOnInit(): void {
  }

}

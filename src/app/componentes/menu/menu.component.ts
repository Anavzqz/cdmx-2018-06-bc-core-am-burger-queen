import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isBreakfast: boolean;
  public isDinner: boolean;

  constructor() { };

  ngOnInit() {
  };

  breakfast() {
    this.isBreakfast = true;
    this.isDinner = false;
  };

  dinner() {
    this.isDinner = true;
    this.isBreakfast = false;
  }
}

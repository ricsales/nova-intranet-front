import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {


  screenWidth: number;
  constructor() { 
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit() {
  }

 


}

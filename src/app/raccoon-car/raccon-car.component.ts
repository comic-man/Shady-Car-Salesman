import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raccon-car',
  template:`<img src="assets/raccooncar.jpg" alt="">`,
  styleUrls: ['./raccon-car.component.css']
})
export class RacconCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

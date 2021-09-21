import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raccon-car',
  templateUrl:`<raccon-car></raccon-car>
              <raccon-car></raccon-car>`,
  styleUrls: ['./raccon-car.component.css']
})
export class RacconCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-tires',
  templateUrl: './no-tires.component.html',
  styleUrls: ['./no-tires.component.css']
})
export class NoTiresComponent implements OnInit {
cars=["No Tools","Complete Garbage"]
  constructor() { }

  ngOnInit(): void {
  }

}

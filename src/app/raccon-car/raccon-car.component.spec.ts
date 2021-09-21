import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacconCarComponent } from './raccon-car.component';

describe('RacconCarComponent', () => {
  let component: RacconCarComponent;
  let fixture: ComponentFixture<RacconCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacconCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacconCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

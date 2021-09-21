import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethheadCarComponent } from './methhead-car.component';

describe('MethheadCarComponent', () => {
  let component: MethheadCarComponent;
  let fixture: ComponentFixture<MethheadCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethheadCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethheadCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

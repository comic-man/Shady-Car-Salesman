import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTiresComponent } from './no-tires.component';

describe('NoTiresComponent', () => {
  let component: NoTiresComponent;
  let fixture: ComponentFixture<NoTiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

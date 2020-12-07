import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSeatComponent } from './theater-seat.component';

describe('TheaterSeatComponent', () => {
  let component: TheaterSeatComponent;
  let fixture: ComponentFixture<TheaterSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

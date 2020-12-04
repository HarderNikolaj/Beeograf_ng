import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketsPageComponent } from './my-tickets-page.component';

describe('MyTicketsPageComponent', () => {
  let component: MyTicketsPageComponent;
  let fixture: ComponentFixture<MyTicketsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTicketsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTicketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

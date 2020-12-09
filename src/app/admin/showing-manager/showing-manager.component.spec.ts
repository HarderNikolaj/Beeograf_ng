import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingManagerComponent } from './showing-manager.component';

describe('ShowingManagerComponent', () => {
  let component: ShowingManagerComponent;
  let fixture: ComponentFixture<ShowingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

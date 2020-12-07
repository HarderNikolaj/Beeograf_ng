import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSeatingEditorComponent } from './theater-seating-editor.component';

describe('TheaterSeatingEditorComponent', () => {
  let component: TheaterSeatingEditorComponent;
  let fixture: ComponentFixture<TheaterSeatingEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSeatingEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterSeatingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

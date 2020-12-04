import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterEditorComponent } from './theater-editor.component';

describe('TheaterEditorComponent', () => {
  let component: TheaterEditorComponent;
  let fixture: ComponentFixture<TheaterEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

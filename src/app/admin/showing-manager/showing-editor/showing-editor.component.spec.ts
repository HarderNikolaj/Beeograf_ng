import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingEditorComponent } from './showing-editor.component';

describe('ShowingEditorComponent', () => {
  let component: ShowingEditorComponent;
  let fixture: ComponentFixture<ShowingEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogePopupComponent } from './dialoge-popup.component';

describe('DialogePopupComponent', () => {
  let component: DialogePopupComponent;
  let fixture: ComponentFixture<DialogePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

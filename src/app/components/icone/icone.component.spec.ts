import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeComponent } from './icone.component';

describe('IconeComponent', () => {
  let component: IconeComponent;
  let fixture: ComponentFixture<IconeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconeComponent]
    });
    fixture = TestBed.createComponent(IconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

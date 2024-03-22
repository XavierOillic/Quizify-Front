import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThemeComponent } from './card-theme.component';

describe('CardThemeComponent', () => {
  let component: CardThemeComponent;
  let fixture: ComponentFixture<CardThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardThemeComponent]
    });
    fixture = TestBed.createComponent(CardThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconeComponent } from './card-icone.component';

describe('CardIconeComponent', () => {
  let component: CardIconeComponent;
  let fixture: ComponentFixture<CardIconeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIconeComponent]
    });
    fixture = TestBed.createComponent(CardIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

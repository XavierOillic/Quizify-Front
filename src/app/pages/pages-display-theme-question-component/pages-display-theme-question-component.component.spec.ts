import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDisplayThemeQuestionComponentComponent } from './pages-display-theme-question-component.component';

describe('PagesDisplayThemeQuestionComponentComponent', () => {
  let component: PagesDisplayThemeQuestionComponentComponent;
  let fixture: ComponentFixture<PagesDisplayThemeQuestionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesDisplayThemeQuestionComponentComponent]
    });
    fixture = TestBed.createComponent(PagesDisplayThemeQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

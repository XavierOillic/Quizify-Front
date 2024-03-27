import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateQuestionComponent } from './page-create-question.component';

describe('PageCreateQuestionComponent', () => {
  let component: PageCreateQuestionComponent;
  let fixture: ComponentFixture<PageCreateQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreateQuestionComponent]
    });
    fixture = TestBed.createComponent(PageCreateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

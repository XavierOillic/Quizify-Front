import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuestionReponseComponent } from './form-question-reponse.component';

describe('FormQuestionReponseComponent', () => {
  let component: FormQuestionReponseComponent;
  let fixture: ComponentFixture<FormQuestionReponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQuestionReponseComponent]
    });
    fixture = TestBed.createComponent(FormQuestionReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

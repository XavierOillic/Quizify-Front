import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCategorieComponent } from './form-create-categorie.component';

describe('FormCreateCategorieComponent', () => {
  let component: FormCreateCategorieComponent;
  let fixture: ComponentFixture<FormCreateCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateCategorieComponent]
    });
    fixture = TestBed.createComponent(FormCreateCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

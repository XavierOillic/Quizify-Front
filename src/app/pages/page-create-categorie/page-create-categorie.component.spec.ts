import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateCategorieComponent } from './page-create-categorie.component';

describe('PageCreateCategorieComponent', () => {
  let component: PageCreateCategorieComponent;
  let fixture: ComponentFixture<PageCreateCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreateCategorieComponent]
    });
    fixture = TestBed.createComponent(PageCreateCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

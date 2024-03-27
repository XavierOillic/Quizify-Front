import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStatsComponent } from './post-stats.component';

describe('PostStatsComponent', () => {
  let component: PostStatsComponent;
  let fixture: ComponentFixture<PostStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostStatsComponent]
    });
    fixture = TestBed.createComponent(PostStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

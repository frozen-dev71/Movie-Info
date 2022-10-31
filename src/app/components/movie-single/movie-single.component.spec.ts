import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSingleComponent } from './movie-single.component';

describe('MovieSingleComponent', () => {
  let component: MovieSingleComponent;
  let fixture: ComponentFixture<MovieSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

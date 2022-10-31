import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEmbederComponent } from './video-embeder.component';

describe('VideoEmbederComponent', () => {
  let component: VideoEmbederComponent;
  let fixture: ComponentFixture<VideoEmbederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEmbederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoEmbederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

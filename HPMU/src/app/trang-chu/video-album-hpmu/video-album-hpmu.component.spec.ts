import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAlbumHpmuComponent } from './video-album-hpmu.component';

describe('VideoAlbumHpmuComponent', () => {
  let component: VideoAlbumHpmuComponent;
  let fixture: ComponentFixture<VideoAlbumHpmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAlbumHpmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAlbumHpmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTinTucComponent } from './slide-tin-tuc.component';

describe('SlideTinTucComponent', () => {
  let component: SlideTinTucComponent;
  let fixture: ComponentFixture<SlideTinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideTinTucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLayoutRecruitComponent } from './first-layout-recruit.component';

describe('FirstLayoutRecruitComponent', () => {
  let component: FirstLayoutRecruitComponent;
  let fixture: ComponentFixture<FirstLayoutRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLayoutRecruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLayoutRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

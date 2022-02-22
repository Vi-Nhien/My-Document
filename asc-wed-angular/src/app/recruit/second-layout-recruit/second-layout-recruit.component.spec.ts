import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayoutRecruitComponent } from './second-layout-recruit.component';

describe('SecondLayoutRecruitComponent', () => {
  let component: SecondLayoutRecruitComponent;
  let fixture: ComponentFixture<SecondLayoutRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLayoutRecruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLayoutRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

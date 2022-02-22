import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageIntroComponent } from './first-page-intro.component';

describe('FirstPageIntroComponent', () => {
  let component: FirstPageIntroComponent;
  let fixture: ComponentFixture<FirstPageIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPageIntroComponent } from './third-page-intro.component';

describe('ThirdPageIntroComponent', () => {
  let component: ThirdPageIntroComponent;
  let fixture: ComponentFixture<ThirdPageIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPageIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

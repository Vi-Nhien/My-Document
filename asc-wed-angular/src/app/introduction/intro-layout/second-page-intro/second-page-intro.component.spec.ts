import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageIntroComponent } from './second-page-intro.component';

describe('SecondPageIntroComponent', () => {
  let component: SecondPageIntroComponent;
  let fixture: ComponentFixture<SecondPageIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

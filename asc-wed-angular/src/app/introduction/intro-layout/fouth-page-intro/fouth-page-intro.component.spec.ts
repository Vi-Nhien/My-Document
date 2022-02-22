import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouthPageIntroComponent } from './fouth-page-intro.component';

describe('FouthPageIntroComponent', () => {
  let component: FouthPageIntroComponent;
  let fixture: ComponentFixture<FouthPageIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FouthPageIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FouthPageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

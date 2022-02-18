import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouthLayoutComponent } from './fouth-layout.component';

describe('FouthLayoutComponent', () => {
  let component: FouthLayoutComponent;
  let fixture: ComponentFixture<FouthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FouthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FouthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

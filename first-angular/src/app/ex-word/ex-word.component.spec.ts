import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExWordComponent } from './ex-word.component';

describe('ExWordComponent', () => {
  let component: ExWordComponent;
  let fixture: ComponentFixture<ExWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

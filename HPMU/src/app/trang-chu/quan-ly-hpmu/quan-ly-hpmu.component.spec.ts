import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyHpmuComponent } from './quan-ly-hpmu.component';

describe('QuanLyHpmuComponent', () => {
  let component: QuanLyHpmuComponent;
  let fixture: ComponentFixture<QuanLyHpmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyHpmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyHpmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

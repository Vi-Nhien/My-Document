import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyenSinhHpmuComponent } from './tuyen-sinh-hpmu.component';

describe('TuyenSinhHpmuComponent', () => {
  let component: TuyenSinhHpmuComponent;
  let fixture: ComponentFixture<TuyenSinhHpmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuyenSinhHpmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuyenSinhHpmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

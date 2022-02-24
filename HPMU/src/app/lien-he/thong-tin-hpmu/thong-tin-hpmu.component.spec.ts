import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinHpmuComponent } from './thong-tin-hpmu.component';

describe('ThongTinHpmuComponent', () => {
  let component: ThongTinHpmuComponent;
  let fixture: ComponentFixture<ThongTinHpmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongTinHpmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinHpmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

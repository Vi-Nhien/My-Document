import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucHpmuComponent } from './tin-tuc-hpmu.component';

describe('TinTucHpmuComponent', () => {
  let component: TinTucHpmuComponent;
  let fixture: ComponentFixture<TinTucHpmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinTucHpmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucHpmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

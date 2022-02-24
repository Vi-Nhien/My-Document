import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienKetHpmuComponent } from './lien-ket-hpmu.component';

describe('LienKetHpmuComponent', () => {
  let component: LienKetHpmuComponent;
  let fixture: ComponentFixture<LienKetHpmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienKetHpmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienKetHpmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

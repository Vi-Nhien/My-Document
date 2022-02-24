import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuKienHPMUComponent } from './su-kien-hpmu.component';

describe('SuKienHPMUComponent', () => {
  let component: SuKienHPMUComponent;
  let fixture: ComponentFixture<SuKienHPMUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuKienHPMUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuKienHPMUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

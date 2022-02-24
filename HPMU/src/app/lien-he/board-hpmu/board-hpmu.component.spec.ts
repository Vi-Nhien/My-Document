import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHPMUComponent } from './board-hpmu.component';

describe('BoardHPMUComponent', () => {
  let component: BoardHPMUComponent;
  let fixture: ComponentFixture<BoardHPMUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardHPMUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHPMUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

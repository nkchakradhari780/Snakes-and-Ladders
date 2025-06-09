import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBox } from './board-box';

describe('BoardBox', () => {
  let component: BoardBox;
  let fixture: ComponentFixture<BoardBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

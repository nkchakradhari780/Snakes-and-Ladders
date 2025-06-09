import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRow } from './board-row';

describe('BoardRow', () => {
  let component: BoardRow;
  let fixture: ComponentFixture<BoardRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

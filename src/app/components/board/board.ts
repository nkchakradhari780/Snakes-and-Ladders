import { Component } from '@angular/core';
import { BoardRow } from '../board-row/board-row';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [BoardRow,CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {
  // rows = new Array(10);
  rows = [0,1,2,3,4,5,6,7,8,9]

  reverseRow = this.rows.reverse()
}

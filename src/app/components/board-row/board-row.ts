import { Component, Input, OnInit } from '@angular/core';
import { BoardBox } from '../board-box/board-box';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-row',
  imports: [BoardBox, FormsModule, CommonModule],
  templateUrl: './board-row.html',
  styleUrl: './board-row.css'
})
export class BoardRow {
  rows = new Array(10);
  boxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @Input() rowIndex!: number;
  even: boolean = false;

 isEven(): boolean {
  const result = this.rowIndex % 2 === 0;
  return result;
}


}

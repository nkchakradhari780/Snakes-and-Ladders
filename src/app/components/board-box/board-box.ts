import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../player/player';

@Component({
  selector: 'app-board-box',
  imports: [FormsModule,CommonModule,Player],
  templateUrl: './board-box.html',
  styleUrl: './board-box.css'
})
export class BoardBox {
  boxes = new Array(10);
  playerOne = false
   @Input() boxIndex!: number;
  @Input() rowIndex!: number;
}

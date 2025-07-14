import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../player/player';
import { GameService } from '../../service/game-service';

@Component({
  selector: 'app-board-box',
  standalone: true,
  imports: [FormsModule, CommonModule, Player],
  templateUrl: './board-box.html',
  styleUrl: './board-box.css',
})
export class BoardBox implements OnInit {
  @Input() boxIndex!: number;
  @Input() rowIndex!: number;

  playerOneScore: number = 0;
  playerTwoScore: number = 0;

  Index: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.Index = this.boxIndex + (this.rowIndex * 10);

    this.gameService.playerOneScore$.subscribe(value => {
      this.playerOneScore = value;
    });

    this.gameService.playerTwoScore$.subscribe(value => {
      this.playerTwoScore = value;
    });
  }
}

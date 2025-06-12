import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './components/board/board';
import { Player } from './components/player/player';
import { GameService } from './service/game-service';
import { WinnerBox } from "./components/winner-box/winner-box";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Board, Player, WinnerBox,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [GameService]
})
export class App {
  protected title = 'Snakes_and_Ladders';

  constructor(private gameService: GameService) { }

  playerOne: boolean = true;
  playerOneScore: number = 0;
  playerTwoScore: number = 0;
  Winner: string = '';

  ngOnInit(){
    this.gameService.playerOneScore$.subscribe(value => {
      this.playerOneScore = value;
    });

    this.gameService.playerTwoScore$.subscribe(value => {
      this.playerTwoScore = value;
    });
  }

  diceVal: number = 2;

  rollDice() {
    this.diceVal = Math.floor(Math.random() * 6) + 1;

    if (this.playerOne) {
      this.gameService.updatePlayerOneScore(this.diceVal);
      if(this.playerOneScore === 100){
        this.Winner = "Player One"
        return;
      }
      if (this.diceVal !== 6) {
        this.playerOne = !this.playerOne;
      }
    } else {
      this.gameService.updatePlayerTwoScore(this.diceVal);
      if(this.playerTwoScore === 100){
        this.Winner = "Player Two"
        return;
      }
      if (this.diceVal !== 6) {
        this.playerOne = !this.playerOne;
      }
    }
  }

}

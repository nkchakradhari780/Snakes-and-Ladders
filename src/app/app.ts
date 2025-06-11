import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './components/board/board';
import { Player } from './components/player/player';
import { GameService } from './service/game-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Board, Player],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [GameService]
})
export class App {
  protected title = 'Snakes_and_Ladders';

  constructor(private gameService: GameService) { }

  playerOne: boolean = true;

  diceVal: number = 2;

  rollDice() {
    this.diceVal = Math.floor(Math.random() * 6) + 1;

    if (this.playerOne) {
      this.gameService.updatePlayerOneScore(this.diceVal);
      if (this.diceVal !== 6) {
        this.playerOne = !this.playerOne;
      }
    } else {
      this.gameService.updatePlayerTwoScore(this.diceVal);
      if (this.diceVal !== 6) {
        this.playerOne = !this.playerOne;
      }
    }
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private playerOneSource = new BehaviorSubject<number>(0);
  private playerTwoSource = new BehaviorSubject<number>(0);

  playerOneScore$ = this.playerOneSource.asObservable();
  playerTwoScore$ = this.playerTwoSource.asObservable();

  updatePlayerOneScore(value: number) {
    const current = this.playerOneSource.getValue();
    if(current + value <= 100){
      this.playerOneSource.next(current + value);
    }
  }

  updatePlayerTwoScore(value: number) {
    const current = this.playerTwoSource.getValue();
    if(current + value <= 100){
      this.playerTwoSource.next(current + value);
    }
  }

  constructor() { }
}

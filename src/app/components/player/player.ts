import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.css',
})
export class Player {
  @Input() name: string = '';
  @Input() symbol: string = '';
  @Input() score: number = 0;
}

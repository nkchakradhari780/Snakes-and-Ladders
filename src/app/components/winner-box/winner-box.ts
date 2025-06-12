import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-winner-box',
  imports: [FormsModule,CommonModule],
  templateUrl: './winner-box.html',
  styleUrl: './winner-box.css'
})
export class WinnerBox {
  @Input() name: string = '';
}

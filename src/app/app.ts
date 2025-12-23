import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tictactoe } from './TicTacToe/tictactoe/tictactoe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Tictactoe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tictactoegame');
}

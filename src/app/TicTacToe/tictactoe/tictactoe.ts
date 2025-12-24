import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-tictactoe',
  imports: [CommonModule],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css',
})
export class Tictactoe {
  boardArray:string[]=Array(9).fill('');
  isNext:boolean =true;
  isWin:boolean=false;
  winner:string='';
  WINING_PATTERNS:number[][]=[
        [0,1,2],
        [3,4,5],
        [6,7,8], 
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]   
    ];

  oncellclick(index:number){
   if(!this.isWin){
     if(this.isNext && this.boardArray[index]===''){
         this.boardArray[index]='X';
         this.isNext=!this.isNext;
         
    }
    else if(!this.isNext && this.boardArray[index]===''){
          this.boardArray[index]='O';
          this.isNext=!this.isNext; 
    }
    this.checkWin();
   }
   return 
   }
   checkWin(){
    for(const pattern of this.WINING_PATTERNS){
      const [a,b,c]=pattern;
        if(this.boardArray[a]==this.boardArray[b] && this.boardArray[b]===this.boardArray[c] && this.boardArray[c]===this.boardArray[a] && this.boardArray[a]!==''){
          this.isWin=true;
          this.winGame();
          this.winner="The Winner is "+this.boardArray[a];
          
          break;
        }
    }
    if(this.boardArray.every(cell=>cell!=='' ) && !this.isWin){
        this.winner="It's a Draw";
        this.drawEffect()
        this.isWin=true;
    }
    
   }
   reset(){
    this.boardArray=Array(9).fill('');
    this.isNext=true;
    this.isWin=false;
    this.winner='';
   }
  winGame() {
  const duration = 2000; // 2 seconds
  const end = Date.now() + duration;

  const colors = ['#FFD700', '#FF4500', '#00E5FF', '#7C4DFF', '#FFFFFF'];

  const frame = () => {
    confetti({
      particleCount: 8,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.2 },
      colors
    });

    confetti({
      particleCount: 8,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.2 },
      colors
    });

    confetti({
      particleCount: 6,
      spread: 360,
      startVelocity: 45,
      gravity: 1.3,
      scalar: 1.2,
      origin: { x: Math.random(), y: 0 },
      colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}
drawEffect() {
  const duration = 1500;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 4,
      spread: 40,
      startVelocity: 10,
      gravity: 0.6,
      scalar: 0.9,
      colors: ['#B0BEC5', '#ECEFF1'],
      origin: { x: Math.random(), y: 0 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}


}

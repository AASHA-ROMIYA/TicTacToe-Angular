import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
          this.winner="The Winner is "+this.boardArray[a];
          break;
        }
    }
    if(this.boardArray.every(cell=>cell!=='' ) && !this.isWin){
        this.winner="It's a Draw";
        this.isWin=true;
    }
    
   }
   reset(){
    this.boardArray=Array(9).fill('');
    this.isNext=true;
    this.isWin=false;
    this.winner='';
   }

}

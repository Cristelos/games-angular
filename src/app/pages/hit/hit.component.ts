import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent implements OnInit{

  score: number;
  tiempo: number;
  squares: any[];
  squareClasses: any;
  // bgImage = "assets/exercise-2/bg.jpg";
  // moleImage = "assets/exercise-2/mole.png";

  constructor(){
    this.score = 0;
    this.tiempo = 0;
    this.squares = [];
    this.squareClasses = {
      'b-square': true,
      'b-mole': false
    };
  }

  ngOnInit(): void {
   this.crearTabla();
 }

 crearTabla(){
  for (let i = 0; i<9 ; i++) {
    this.squares.push({ isMole: false })
  }
 }

 moverTopo(){
  const index = Math.floor(Math.random() * 9);
  this.squares.forEach((square, i) => {
    square.isMole = (i === index);
  })
}


}

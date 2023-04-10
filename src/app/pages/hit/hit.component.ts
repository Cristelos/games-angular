import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent implements OnInit {
  topo: boolean = false;
  score: number = 0;
  tiempo: any;
  filas: number [] = [1,1,1];
  columnas: number [] = [1,1,1];
  topoImg: string = "./assets/exercise-2/mole.png";
  bgImg: string = "./assets/exercise-2/bg.jpg";
  imgSrc: string[][] = [];
  casilla: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.default();
  }
 
  start(){
    this.tiempo;
    this.score = 0;
    this.tiempo = setInterval(() => {
      let contadorp = 2;
      let prueba = setInterval(()=>{
        this.default();
        contadorp --;

         //ponemos el topo en las casillas
        this.casilla[0] = this.moverRandom(3);
        this.casilla[1] = this.moverRandom(3);
        this.imgSrc[this.casilla[0]][this.casilla[1]] = this.topoImg;

        if(contadorp<0){
          clearInterval(prueba);
        }
      }, 500)

        if((this.tiempo <= 1)){
          clearInterval(this.tiempo)
        }
        this.tiempo --;
    }, 1000)
    
  }

  puntuar(i: number, j:number){
    if(this.imgSrc[i][j] === this.topoImg){
      this.imgSrc[i][j] = this.bgImg;
      this.score++;
    }
  }

  default() {
    //Pintamos las imágenes en la tabla
    for(let i = 0; i <this.filas.length; i++){
      this.imgSrc[i] = [];
      for(let j = 0; j<this.columnas.length; j++){
        this.imgSrc[i][j] = this.bgImg;
        console.log(this.imgSrc[i][j]);
        
      }
    }
  }
  
  moverRandom(num: number){
    return Math.floor(Math.random()*num)
  }

}

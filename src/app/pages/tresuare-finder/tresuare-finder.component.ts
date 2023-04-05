import { Component } from '@angular/core';

@Component({
  selector: 'app-tresuare-finder',
  templateUrl: './tresuare-finder.component.html',
  styleUrls: ['./tresuare-finder.component.scss']
})
export class TresuareFinderComponent {

  filas: any;
  columnas: any;
  tabla: boolean;
  imagenSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  tesoro: number[];
  intentosCount: number = 0;

  constructor(){
    this.filas;
    this.columnas;
    this.tabla = false;
    this.imagenSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.tesoro = [];
    this.intentosCount;
  }


  //pintamos la tabla con las imágenes
  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columnas});
    this.tabla = true;
    this.imagenSrc = [];
  
    //añadimos el cofre de manera aleatoria
    const tesoroFila = Math.floor(Math.random() * this.filas);
    const tesoroColumna = Math.floor(Math.random() * this.columnas);
  
    //añadimos las imágenes de las X según las coordenadas i y j de la tabla
    for(let i = 0; i < this.filas; i++) {
      this.imagenSrc[i] = [];
      for(let j = 0; j < this.columnas; j++) {
        this.imagenSrc[i][j] = "./assets/exercise-4/x.png";
      }
    }
    //almacenamos la fila y columna del tesoro
    this.tesoro = [tesoroFila, tesoroColumna];
  }
  
  //evento click para voltear las imágenes según las coordenadas de fila y columna
  voltearImagen(fila: number, columna: number) {
    if (this.tesoro[0] === fila && this.tesoro[1] === columna) {
      this.imagenSrc[fila][columna] = "./assets/exercise-4/chest.png";
    } else if (this.imagenSrc[fila][columna] === "./assets/exercise-4/skull.png") {
      this.imagenSrc[fila][columna] = "./assets/exercise-4/x.png";
    } else if (this.imagenSrc[fila][columna] !== "./assets/exercise-4/skull.png") {
      this.imagenSrc[fila][columna] = "./assets/exercise-4/skull.png";
    }

    //al clickar en el tesoro me salga un alert
    if(this.imagenSrc[fila][columna] === "./assets/exercise-4/chest.png"){
      alert('¡Enhorabuena, has encontrado el tesoro!')
    }
  }

  //Contamos los intentos
  numeroIntentos(){
    this.intentosCount++;
  }

  //Eliminamos la tabla y ponemos a cero el número de intentos
  reset(){
    this.tabla = false;
    this.imagenSrc = [];
    this.intentosCount = 0;
  }
  
  
}



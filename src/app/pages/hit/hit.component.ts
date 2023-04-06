import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss']
})
export class HitComponent implements OnInit {
  score: number = 0;
  tiempo: number = 0;
  squares: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.crearTabla();
  }

  crearTabla() {
    for (let i = 0; i < 9; i++) {
      this.squares.push({ isMole: false })
    }
    // const topo = Math.floor(Math.random()* this.squares.length);
    // this.squares[topo].isMole = true;
  }
  

  moverTopo() {
    setInterval(() => {
      const index = Math.floor(Math.random() * 9);
      this.squares.forEach((square, i) => {
        square.isMole = (i === index);
      })
    }, 1000);
  }
  
  


}

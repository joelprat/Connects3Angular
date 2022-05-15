import { Component, Injectable } from '@angular/core';

import { Jugador } from '../service/jugador.service';
import { Tablero } from '../service/tablero.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent{

  public jugadorX: Jugador;
  public jugadorO: Jugador;
  private tablero: Tablero;

  constructor(){
    this.jugadorX = new Jugador("X", true, 1);
    this.jugadorO = new Jugador("O", false, 0);
    this.tablero = new Tablero();
  }

  ngOnInit(): void {
  }

  public modificarTablero(position: number){
    if(this.tablero.posicions[position] == -1){
      let torn = this.tornActual();
      this.tablero.posicions[position] = torn;
    }
    else if(this.tablero.posicions[position] == 0 || this.tablero.posicions[position] == 1){
      alert("Posición ocupada");
    }
  }

  public tornActual():number{
    if (this.jugadorO.getTorn() && !this.jugadorX.getTorn()){
      //this.jugadorO.canviTorn(false);
      //this.jugadorX.canviTorn(true);
      return this.jugadorO.getNumTablero();
    } 
    if (!this.jugadorO.getTorn() && this.jugadorX.getTorn()){
      //this.jugadorO.canviTorn(true);
      //this.jugadorX.canviTorn(false);
      return this.jugadorX.getNumTablero();
    }
    return -1;
  }


  public writeTablero(posicion:string){
    
    let textoTablero = document.getElementById(posicion)?.innerHTML;

    if(this.tornActual() == 0){
      this.modificarTablero(parseInt(posicion));
      textoTablero = this.jugadorO.getFitxa();
    }
    else if(this.tornActual() == 1){
      textoTablero = this.jugadorO.getFitxa();
    }
  }

}

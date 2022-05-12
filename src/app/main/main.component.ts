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
    this.jugadorX = new Jugador("X", true);
    this.jugadorO = new Jugador("O", false);
    this.tablero = new Tablero();
  }

  ngOnInit(): void {
  }

  public writeText(position: number){
    if(this.tablero.posicions[position] == -1){
      this.tablero.posicions[position] = 
    }
  }

  public tornActual():string{
    if (this.jugadorO.getTorn() && !this.jugadorX.getTorn()) return this.jugadorO.getFitxa();
    if (!this.jugadorO.getTorn() && this.jugadorX.getTorn()) return this.jugadorX.getFitxa();

    return "error";
  }

}

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
  public tablero: Tablero;
  public winner:boolean;
  public turno: string;
  public counter: number;
  public ganador: string;

  constructor(){
    this.jugadorX = new Jugador("X", true);
    this.jugadorO = new Jugador("O", false);
    this.tablero = new Tablero();
    this.turno = "X";
    this.winner = false;
    this.counter = 0;
    this.ganador = "";
  }

  public modificarTablero(position: number){
    if(!this.tablero.posicions[position].getOcupada()){
      this.counter++;
      this.tablero.posicions[position].setOcupada(true);
      this.tablero.posicions[position].setTexto(this.turno);
      this.winner = this.tablero.comprobacio3ralla(this.turno);
      this.ganador = this.turno;
      this.canviarTornsJugadors();
      return false;
    }
    else{
      alert("Posición ocupada");
      return true;
    }
  }

  public canviarTornPartida(): string{
    if (this.jugadorO.getTorn() && !this.jugadorX.getTorn()) return "O";
    if (!this.jugadorO.getTorn() && this.jugadorX.getTorn()) return "X";
    return "";
  }



  public canviarTornsJugadors(){
    if (this.turno == "X"){
      this.jugadorO.canviTorn(true);
      this.jugadorX.canviTorn(false);
    }else{
      this.jugadorO.canviTorn(false);
      this.jugadorX.canviTorn(true);
    }
    this.turno = this.canviarTornPartida();
  }


  public writeTablero(posicion:string){

    let posicioTablero = document.getElementById(posicion);
    let posicionOcupada = this.modificarTablero(parseInt(posicion));

    if(this.turno == "X"){
      if (posicioTablero && !posicionOcupada) posicioTablero.innerHTML = this.tablero.posicions[parseInt(posicion)].getTexto();
    }
    else if(this.turno == "O"){
      if (posicioTablero && !posicionOcupada) posicioTablero.innerHTML = this.tablero.posicions[parseInt(posicion)].getTexto();
    }
  }

  public reset(){
    this.winner=false;
    this.tablero = new Tablero();
    this.counter = 0;
  }
}

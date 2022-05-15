import { Celda } from './celda.service';

export class Tablero{

    public posicions: Array<Celda>;
  
    constructor(){
      this.posicions = [];
      for(let i=0; i<9; i++){
        let a = this.posicions.push(new Celda(" ",false));
      }
    }
    
    public comprobacio3ralla(letraJugador:string):boolean{

      if (this.posicions[0].getTexto() == letraJugador && this.posicions[1].getTexto() == letraJugador && this.posicions[2].getTexto() == letraJugador) return true
      if (this.posicions[3].getTexto() == letraJugador && this.posicions[4].getTexto() == letraJugador && this.posicions[5].getTexto() == letraJugador) return true
      if (this.posicions[6].getTexto() == letraJugador && this.posicions[7].getTexto() == letraJugador && this.posicions[8].getTexto() == letraJugador) return true
      if (this.posicions[0].getTexto() == letraJugador && this.posicions[3].getTexto() == letraJugador && this.posicions[6].getTexto() == letraJugador) return true
      if (this.posicions[1].getTexto() == letraJugador && this.posicions[4].getTexto() == letraJugador && this.posicions[7].getTexto() == letraJugador) return true
      if (this.posicions[2].getTexto() == letraJugador && this.posicions[5].getTexto() == letraJugador && this.posicions[8].getTexto() == letraJugador) return true
      if (this.posicions[6].getTexto() == letraJugador && this.posicions[4].getTexto() == letraJugador && this.posicions[2].getTexto() == letraJugador) return true
      if (this.posicions[0].getTexto() == letraJugador && this.posicions[4].getTexto() == letraJugador && this.posicions[8].getTexto() == letraJugador) return true
  
      return false;
    }
  
}
  
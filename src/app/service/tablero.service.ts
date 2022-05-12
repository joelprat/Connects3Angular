export class Tablero{

    public posicions: number[]; 
  
    constructor(){
        this.posicions = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    }
    
    public comprobacio3ralla(jugador:boolean):boolean{
      //O
      let num:number=0;
  
      //X
      if(jugador) num = 1;
  
      if (this.posicions[0] == num && this.posicions[1] == num && this.posicions[2] == num) return true
      if (this.posicions[3] == num && this.posicions[4] == num && this.posicions[5] == num) return true
      if (this.posicions[6] == num && this.posicions[7] == num && this.posicions[8] == num) return true
      if (this.posicions[0] == num && this.posicions[3] == num && this.posicions[6] == num) return true
      if (this.posicions[1] == num && this.posicions[4] == num && this.posicions[7] == num) return true
      if (this.posicions[2] == num && this.posicions[5] == num && this.posicions[8] == num) return true
      if (this.posicions[6] == num && this.posicions[4] == num && this.posicions[2] == num) return true
      if (this.posicions[0] == num && this.posicions[4] == num && this.posicions[8] == num) return true
  
      return false;
    }
  
}
  
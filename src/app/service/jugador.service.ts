export class Jugador{

    private fitxa:string; //true => x false => o
    private torn:boolean;//true => pot tirar, false => no pot tirar
    private numTablero: number;
  
    constructor(fitxa:string, torn:boolean, numTablero:number){
      this.fitxa = fitxa;
      this.torn = torn;
      this.numTablero = numTablero;
    }
  
    public getNumTablero(){return this.numTablero }
    public getTorn(){ return this.torn; }
    public getFitxa(){ return this.fitxa }

    public canviTorn(torn:boolean){ this.torn = torn; }
  
  }
export class Jugador{

    private fitxa:string; //true => x false => o
    private torn:boolean;//true => pot tirar, false => no pot tirar
  
    constructor(fitxa:string, torn:boolean){
      this.fitxa = fitxa;
      this.torn = torn;
    }
  
    public getTorn(){ return this.torn; }
    public getFitxa(){ return this.fitxa }

    public canviTorn(torn:boolean){ this.torn = torn; }
  
  }
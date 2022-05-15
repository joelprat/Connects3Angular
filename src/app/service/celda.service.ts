
export class Celda{
    private texto: string;
    private ocupada: boolean;

    constructor(texto: string, ocupada: boolean){
        this.ocupada = ocupada;
        this.texto = texto;
    }

    public getOcupada() {return this.ocupada}
    public getTexto() {return this.texto}

    public setTexto(texto:string){this.texto = texto}
    public setOcupada(ocupada:boolean){this.ocupada = ocupada}
}
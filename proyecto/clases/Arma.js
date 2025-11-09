export class Arma{
    #informacion;
    #nombreArma;
    #danio;
    #tipo;

    constructor(){
        this.#informacion="";
        this.#nombreArma="";
        this.#danio=0;
        this.#tipo="";
    }

    set meterNombreArma(arma){
        this.#nombreArma=arma;
    }

    set meterInformacion(info){
        this.#informacion=info;
    }

    set meterdanio(numdanio){
        this.#danio=numdanio;
    }

    set meterTipo(tip){
        this.#tipo=tip;
    }

    monstrarCaracteristicas(){
        console.log("Arma: "+this.#nombreArma+" informacion: "+this.#informacion+" daño "+this.#danio+" tipo de arma: "+this.#tipo);
    }
    
    // Getters
    getNombreArma(){
        return this.#nombreArma;
    }

    getInformacion(){
        return this.#informacion;
    }

    getdanio(){
        return this.#danio;
    }

    getTipo(){
        return this.#tipo;
    }
}
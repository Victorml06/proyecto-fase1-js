import { Casa } from "./Casa.js";
import { Arma } from "./Arma.js";


export class Personaje{
    #nombrePersonaje;
    #age;
    #live;
    #casaPerteneciente;
    #arma;

    constructor(){
        this.#nombrePersonaje="";
        this.#age = 0;
        this.#live = true;
        this.#casaPerteneciente="";
    }
    // Settets
    set meterNombrePersonaje(nombre){
        this.#nombrePersonaje=nombre;
    }
    set meterEdad(_age){
        this.#age=_age;
    }
    
    meterCasa(casas){
        if (!(casas instanceof Casa)) {
            console.log("Solo casas");
            return;
        }
        this.#casaPerteneciente=casas;
    }
    meterArma(armas){
        if (!(armas instanceof Arma)) {
            console.log("Solo armas");
            return;
        }
        this.#arma=armas;
    }
    presentarse(){
        let nombreCasa=this.#casaPerteneciente.getNombreCasa();
        console.log("Hola soy "+this.#nombrePersonaje+", tengo "+ this.#age+" y pertenezco a la casa: "+nombreCasa);
    }

    // Getters
    getNombrePersonaje(){
        return this.#nombrePersonaje;
    }

    getEdad(){
        return this.#age;
    }

    estaVivo(){
        return this.#live;
    }

    getCasaPerteneciente(){
        return this.#casaPerteneciente;
    }

    getArma(){
        return this.#arma;
    }
}
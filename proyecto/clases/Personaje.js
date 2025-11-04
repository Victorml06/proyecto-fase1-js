export class Personaje {
    constructor(nombre, edad, casa) {
        this.nombre = nombre;
        this.edad = edad;
        this.estado = "Vivo";
        this.casa = casa;
        this.arma = null;
    }

    equiparArma(arma) {
        this.arma = arma;
        console.log(`${this.nombre} ha equipado el arma ${arma.nombre}.`);
    }

    morir() {
        this.estado = "Muerto";
        console.log(`${this.nombre} ha muerto.`);
    }

    presentarse() {
        console.log(`Soy ${this.nombre} de la Casa ${this.casa.nombre}.`);
    }
}
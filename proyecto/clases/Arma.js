export class Arma {
    constructor(nombre, daño, tipo) {
        this.nombre = nombre;
        this.daño = daño;
        this.tipo = tipo;
    }

    descripcion() {
        return `${this.nombre} (${this.tipo}) - daño: ${this.daño}`;
    }
}
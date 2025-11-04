export class Reino {
    constructor(nombre) {
        this.nombre = nombre;
        this.casas = [];
        this.rey = null;
    }

    agregarCasa(casa) {
        this.casas.push(casa);
        console.log(`La Casa ${casa.nombre} ha sido añadida al Reino de ${this.nombre}.`);
    }

    proclamarRey(personaje) {
        this.rey = personaje;
        console.log(`${personaje.nombre} ha sido proclamado rey de ${this.nombre}.`);
    }

    listarCasas() {
        console.log("\nCasas del Reino de " + this.nombre + ":");
        this.casas.forEach(c => console.log(`- Casa ${c.nombre}`));
        console.log();
    }

    mostrarRey() {
        console.log("Rey actual:");
        if (this.rey) {
            console.log(`El rey actual es ${this.rey.nombre} de la Casa ${this.rey.casa.nombre}.`);
        } else {
            console.log("No hay rey actualmente.");
        }
        console.log();
    }
}

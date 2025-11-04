export class Casa {
    constructor(nombre, lema) {
        this.nombre = nombre;
        this.lema = lema;
        this.miembros = []; // Array de personajes
    }

    agregarMiembro(personaje) {
        this.miembros.push(personaje);
        console.log(`${personaje.nombre} ha sido añadido a la Casa ${this.nombre}.`);
    }

    mostrarMiembros() {
        console.log(`Miembros de la Casa ${this.nombre}:`);
        this.miembros.forEach(p => console.log(`- ${p.nombre}`));
        console.log();
    }
}
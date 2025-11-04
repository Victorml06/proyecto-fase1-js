import { Arma } from "./clases/Arma.js";
import { Casa } from "./clases/Casa.js";
import { Personaje } from "./clases/Personaje.js";
import { Reino } from "./clases/Reino.js";

const garra = new Arma("Garra", 25, "espada");
const aguja = new Arma("Aguja", 15, "espada");

// Crear casas
const casaStark = new Casa("Stark", "Se acerca el invierno");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

// Crear personajes
const jon = new Personaje("Jon Snow", 25, casaStark);
const arya = new Personaje("Arya Stark", 18, casaStark);
const jaime = new Personaje("Jaime Lannister", 35, casaLannister);

// Crear reino
const poniente = new Reino("Poniente");

// Añadir casas al reino
poniente.agregarCasa(casaStark);
poniente.agregarCasa(casaLannister);

// Equipar armas
jon.equiparArma(garra);
arya.equiparArma(aguja);

// Añadir personajes a sus casas
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaLannister.agregarMiembro(jaime);

// Proclamar rey
poniente.proclamarRey(jaime);

// Listar casas
poniente.listarCasas();

// Mostrar rey actual
poniente.mostrarRey();

// Mostrar miembros de las casas
casaStark.mostrarMiembros();
casaLannister.mostrarMiembros();

// Presentaciones
console.log("Presentaciones:");
jon.presentarse();
arya.presentarse();
jaime.presentarse();
console.log();

// Mostrar armas
console.log("Armas:");
console.log(garra.descripcion());
console.log(aguja.descripcion());
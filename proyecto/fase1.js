import { Casa } from "./clases/Casa.js";
import { Personaje } from "./clases/Personaje.js";
import { Arma } from "./clases/Arma.js";
import { Reino } from "./clases/Reino.js";

const Reino1=new Reino();
const CasaStark=new Casa();
const CasaLannister=new Casa();

const Garra=new Arma();
const Aguja=new Arma();

const JonSnow=new Personaje();
const AryaStark=new Personaje();
const JaimeLannister=new Personaje();


Reino1.meterReino="Poniente";

CasaStark.meterNombreCasa="Casa Stark";
CasaLannister.meterNombreCasa="Casa Lannister";


Garra.meterNombreArma="Garra";
Garra.meterTipo="espada";
Garra.meterdanio=25;

Aguja.meterNombreArma ="Aguja";
Aguja.meterTipo="espada"; 
Aguja.meterdanio=15;


JonSnow.meterNombrePersonaje="Jon Snow";
AryaStark.meterNombrePersonaje="Arya Stark";
JaimeLannister.meterNombrePersonaje="Jaime Lannister";

JonSnow.meterEdad = 24;
AryaStark.meterEdad = 18;
JaimeLannister.meterEdad = 42;


Reino1.meterCasa(CasaStark);
Reino1.meterCasa(CasaLannister);

JonSnow.meterArma(Garra);
console.log("Jon Snow ha equipado el arma "+Garra.getNombreArma());

AryaStark.meterArma(Aguja);
console.log("Arya Stark ha equipado el arma "+Aguja.getNombreArma());


JonSnow.meterCasa(CasaStark);
CasaStark.meterMiembro(JonSnow); 
console.log("Jon Snow ha sido añadido a la Casa Stark");

AryaStark.meterCasa(CasaStark);
CasaStark.meterMiembro(AryaStark);
console.log("Arya Stark ha sido añadido a la Casa Stark");

JaimeLannister.meterCasa(CasaLannister);
CasaLannister.meterMiembro(JaimeLannister);
console.log("Jaime Lannister ha sido añadido a la Casa Lannister");


Reino1.proclamarRey(JaimeLannister);


//Casas reino poniente
Reino1.visualizarCasas();


//Rey actual
Reino1.mostrarReyActual();


console.log("Miembros de la Casa Stark:");
CasaStark.visualizarMiembro();


console.log("Presentaciones:");
JonSnow.presentarse();
AryaStark.presentarse();
JaimeLannister.presentarse();


console.log("Armas:");
Garra.monstrarCaracteristicas();
Aguja.monstrarCaracteristicas();
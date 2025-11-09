import { Personaje } from "./Personaje.js";

export class Casa{
    #nombreCasa;
    #lema;
    #miembros;

    constructor(){
        this.#nombreCasa="";
        this.#lema="";
        this.#miembros=[];
    }

    //Setters
    set meterNombreCasa(casa){
        this.#nombreCasa=casa;
    }

    set meterLema(lemaIntro){
        this.#lema=lemaIntro;
    }

    
    visualizarMiembro(){
        if(this.#miembros.length==0){
            console.log("No hay miembros");
        }else{
            this.#miembros.forEach(element => {
                console.log(element.getNombrePersonaje());
            });
        }
    }

    meterMiembro(miembross){
        if (!(miembross instanceof Personaje)) {
            console.log("Solo personajes");
            return;
        }
        if(this.EstaMiembro(miembross)){
            console.log("Ya esta en la casa");
        }else{
            this.#miembros.push(miembross);
        }
        
    }

    EstaMiembro(miembross){
        let indice = this.#miembros.indexOf(miembross);
        if(indice==-1){
            return false;
        }else{
            return true;
        }
    }
    
    // Getters
    getNombreCasa(){
        return this.#nombreCasa;
    }

    getLema(){
        return this.#lema;
    }

    getMiembros(){
        // Devuelve copia para no modificar
        return [...this.#miembros];
    }
}
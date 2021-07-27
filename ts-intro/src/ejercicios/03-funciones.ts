/*
    ===== Código de TypeScript =====
*/

import { NumberLiteralType } from "typescript";

function sumar (a: number, b: number): number{
    return a+b;
    
}

const sumarFlecha = (a: number, b: number): number => {
    return a+b;
}

// primero siempre van los obligatorios y luego los opcionales

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number{
    return numero*base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{

    personaje.pv += curarX; 
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "strider",
    pv: 50,
    mostrarHp(){
        console.log(this.pv);
    }
}

curar (nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();


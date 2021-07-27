/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-funcion";




const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('el total es: '+total);
console.log('el isv es: '+isv);



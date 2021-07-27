/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'nokia',
    precio: 150
}

const tableta: Producto = {
    desc: 'ipad air',
    precio: 350
}

// function calculaISV(productos: Producto[]): [number, number]{
    
//     let total = 0;
//     productos.forEach(({ precio }) => {
//         total+=precio;
//     })
//     return [total, total*0.15];
// }

function calculaISV1(productos: Producto[]): number[] {
    const total = productos.reduce( (acumulator, next) => acumulator += next.precio, 0 );
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv2] = calculaISV1(articulos);

// const isv = calculaISV(articulos);
//const isv2 = calculaISV1(articulos);

// console.log('isv: ' + isv );
console.log('total: ' + total );
console.log('isv: ' + isv2 );
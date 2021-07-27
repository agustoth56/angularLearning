/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//const { volumen, segundo, cancion, detalles:{autor, anio}} = reproductor;
const { volumen, segundo, cancion, detalles} = reproductor;
const { autor, anio } = detalles;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autor);
console.log('El año actual de: ', anio);
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string){}
}
class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super( nombreReal, 'NY, USA' );
    }
    
    // private alterEgo: string;
    // public edad: number;
    // static nombreReal: number;
    // op puede ser asi

    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    
    // imprimirNombre(){
    //     return this.alterEgo + ' ' + this.nombreReal;
    // }
}

const ironman = new Heroe("Ironman", 35, 'Tony');
console.log(ironman);


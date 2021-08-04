import { Component } from '@angular/core';



interface Personaje{
  nombre: string;
  poder : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder : 14000
  }

  cambiarNombre( event: any){
    console.log(event.target.value);
  }

  agregar(){
    console.log(this.nuevo);
  }

}

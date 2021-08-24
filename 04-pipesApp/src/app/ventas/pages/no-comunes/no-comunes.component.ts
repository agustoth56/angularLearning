import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nSelect
  nombre:string = 'Sabine';
  genero: string = 'f';

  invitacionMapa = {
    'm': 'invitarlo',
    'f': 'invitarla',
  }


  //i18nPlural
  clientes:string[]=['Maria', 'Juan','Pedro','Hernan'];

  clientesMaps = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarNombre(){
    switch (this.nombre){
      case 'Agustin': {
        this.nombre = 'Sabine';
        this.genero = 'f';
        break;
      }
      case 'Sabine': {
        this.nombre = 'Agustin';
        this.genero = 'm';
        break;
      }
      default:{        
        this.nombre = 'Sabine';
        this.genero = 'f';
        break;
      }
    }
  }

  agregarCliente(){
    this.clientes.push('pepe');
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValuePipe

  persona = {
    nombrte: 'Agustin',
    edad: 22,
    direccion: 'Christchurch, New Zealand'
  }

  //JSON pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },{
      nombre: 'Superman',
      vuela: false,
    },
  ]

  //AsyncPipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('tenemos data de promesa');
    },3500);
  });
}

import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
    .ddd{
      position:absolute;
      z-index: 10;
      width:40%
    }
  `]
})
export class PorPaisComponent {

termino: string | void = '';
hayError: boolean = false;
paises: Country[] = [];
paisesSugeridos: Country[] = [];
mostrarSugerencias: boolean = false;


constructor(private paisService: PaisService){};

buscar( termino: string){
  
  this.hayError=false;
  this.termino = termino;
  this.mostrarSugerencias = false;
  

  this.paisService.buscarPais(this.termino)
  .subscribe(
  (paises) => {
    this.paises = paises;
  },
  (err) =>{
    this.hayError=true;
    this.paises=[];
  }
  );
}

sugerencias (termino: string){

  this.hayError = false;
  this.termino = termino;
  this.mostrarSugerencias = true;
  this.paisService.buscarPais(termino)
  .subscribe(paises=>this.paisesSugeridos=paises.splice(0,5),(err)=>this.paisesSugeridos=[])
}

buscarSugerido(termino:any){
  this.buscar(termino);
  
  this.mostrarSugerencias = false;

}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'agustin';
  nombreUpper: string = 'AGUSTIN';
  nombreCompleto: string = 'aGuStIn ToTh';

  fecha: Date = new Date();

}

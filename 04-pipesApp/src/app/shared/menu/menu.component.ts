import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pipies de Angualar',
          icon: 'pi pi-desktop',
          items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: 'basicos'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                routerLink: 'numeros'
              },
              {
                label: 'No Comunes',
                icon: 'pi pi-globe',
                routerLink: 'no-comunes'
              },
              {
                label: 'Ordenar',
                icon: 'pi pi-arrow-down',
                routerLink: 'ordenar'
              }
          ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',

      }
  ];
  }

}

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import  localEs  from '@angular/common/locales/es-UY';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-uy' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

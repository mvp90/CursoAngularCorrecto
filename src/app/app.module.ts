import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponentTitulo } from './app.component';

@NgModule({
  declarations: [
    AppComponentTitulo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponentTitulo]
})
export class AppModule { }

import { AppComponentNombre } from './app.component';

@NgModule({
  declarations: [
    AppComponentNombre
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponentNombre]
})
export class AppModule2 { }

import { AppComponentCiudad } from './app.component';

@NgModule({
  declarations: [
    AppComponentCiudad
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponentCiudad]
})
export class AppModule3 { }

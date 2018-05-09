import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponentTitulo } from './app.component';

@NgModule({
  declarations: [
    AppComponentTitulo,
    HolaPersonaComponent,
    PersonaComponent,
    PersonasComponent
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
import { HolaPersonaComponent } from './hola-persona/hola-persona.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';

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

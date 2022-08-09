import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';  
import { contadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
//import { heroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
//se quitan estos de aqui, porque ya los pusimos en heroes.module.ts en la carpeta de heroes

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HeroesModule ,// se pone aqui porque se ocupa en app.component.html y para 
    //que pueda ser visible
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }

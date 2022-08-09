import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations : [
        heroeComponent,
        ListadoComponent
    ] ,
    exports : [
        ListadoComponent // es para dejarlo visible cuando es llamado de algo que esta fuera de la carpeta Heroes
    ],
    imports: [
        CommonModule // este sirve para ocupar los ngif o el ngfor
    ]

})
export class HeroesModule{}


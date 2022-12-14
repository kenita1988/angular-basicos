import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'}
)

export class heroeComponent{

    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreCapitalizado ():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad} `; //para concatenar 2 variables
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }
    cambiarEdad():void{
        this.edad=30;
    }
}
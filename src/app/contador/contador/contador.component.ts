import {Component} from '@angular/core'; 

@Component({
    selector: 'app-contador',
    //templateUrl: './contador.component.html',
    //para evitar tener que crear tantos html como ts sean,
    // se ponen aqui directamente el html con template
    template: '    <h1>{{titulo}}</h1>'+
    '<h3> La base es: <strong>{{base}}</strong></h3>'+
    '<button (click)="acumular(base)"> + 1 </button>'+
    '<span>{{numero}}</span>'+
    '<button (click)="acumular(-base)"> - 1 </button>',
    // no me deja poner el html aqui

  })

export class contadorComponent{
    titulo = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular ( valor: number){
      this.numero += valor;
  
    }

}
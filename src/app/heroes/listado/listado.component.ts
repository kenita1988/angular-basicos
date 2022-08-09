import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
 heroes : string []=['SpiderMan','IronMan','Hulk','Thor','Capitan America'];
 heroeBorrado: string ='';

 

 borrar_heroe(){
console.log('Borrando..');
this.heroeBorrado = this.heroes.shift() || '';//remueve el primer elemento y lo retorna
 }
}
 
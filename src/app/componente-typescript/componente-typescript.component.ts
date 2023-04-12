import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-typescript',
  templateUrl: './componente-typescript.component.html',
  styleUrls: ['./componente-typescript.component.css']
})
export class ComponenteTypescriptComponent {
  num1 = 5
  cad="hola"
  un = undefined
  ngOnInit(){
    console.log(this.sumaaleatoria(this.num1,this.cad));
  }

  sumaaleatoria(num:number, palabra:string) {
    return num + palabra;
  
    
  }

}

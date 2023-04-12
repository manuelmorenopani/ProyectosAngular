import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-fundamentos',
  templateUrl: './componente-fundamentos.component.html',
  styleUrls: ['./componente-fundamentos.component.css']
})
  export class ComponenteFundamentosComponent {
    sw : boolean = false
    dato = ""
    cambiartexto(){
      this.sw = !this.sw
      this.llamada()
    }
    llamada(){
      if(this.sw){
        this.cad = "hola"
      }else{
        this.cad = "adios"
      }     
    }
    titulo = "Manuel"
    cad = ""
    ngOnInit(){

    this.llamada()
    }
  }



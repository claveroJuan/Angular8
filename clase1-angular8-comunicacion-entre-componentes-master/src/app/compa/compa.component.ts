import { Component } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompAComponent {
  
  nombre: string;
  apellido: string;

  recibirEvento(e : any){
    this.nombre = e.target.value;
  }
}

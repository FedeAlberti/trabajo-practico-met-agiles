import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  palabraAdivinar = "hola";
  palabraOculta ="";

  constructor() { }

  ngOnInit(): void {
  }

  generarPalabraOculta(){
    for (let i = 0; i < this.palabraAdivinar.length; i++) { 
      this.palabraOculta += "-";      
    }
  }

}

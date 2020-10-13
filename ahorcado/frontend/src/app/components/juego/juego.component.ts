import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  palabraAdivinar = "hola";
  palabraOculta = "";
  letrasArriesgadas= [];
  fallos = 0;
  resultado = '';

  constructor() { }

  ngOnInit(): void {
  }

  generarPalabraOculta(){
    for (let i = 0; i < this.palabraAdivinar.length; i++) { 
      this.palabraOculta += "-";      
    }
  }

  //Agregar check letra
  ingresarLetra(letra) {
    this.letrasArriesgadas.push(letra);
  }

  

  checkLetra(letra) {
    if(this.palabraAdivinar.includes(letra)) {
      for (let index = 0; index < this.palabraAdivinar.length; index++) {
        if (this.palabraAdivinar[index] === letra) {
          this.palabraOculta = 
            this.palabraOculta.substr(0,index) +
            letra +
            this.palabraOculta.substr(index + 1);
        }
        
      }
    }
    else {
      this.fallos ++;
    }
      //Agregar checkear resultado.

  }

  checkResultado() {
    if(this.fallos === 6) {
      this.resultado = 'Lose';
    }
    if(this.palabraOculta === this.palabraAdivinar) {
      this.resultado = 'Win';
    }
  }


}

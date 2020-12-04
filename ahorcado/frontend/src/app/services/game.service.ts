import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  puntajes:any;
  constructor() { 
  }

  guardarUsuario(usuario) : void {
    localStorage.setItem('usuario',usuario);
    this.inicializarPuntaje();
  }

  checkUsuario() : boolean {
    if(localStorage.getItem('usuario')) {
      return true;
    }
    else {
      return false;
    }
  }

  inicializarPuntaje() {
    this.puntajes = [
        {
          nivel: 'facil',
          aciertos: 0
        },      
        {
          nivel: 'medio',
          aciertos: 0
        },
        {
          nivel: 'dificil',
          aciertos: 0
        }
    ];
    localStorage.setItem('puntajes',JSON.stringify(this.puntajes));
  }

  getPuntajeActual() : any {
    this.puntajes = JSON.parse(localStorage.getItem('puntajes'));
  }

  actualizarPuntaje(dificultad: any) : void {
    this.getPuntajeActual();
    switch (dificultad) {
      case 'facil':
        this.puntajes[0].aciertos += 1;
        break;
      case 'medio':
        this.puntajes[1].aciertos += 1;
        break;
      case 'dificil':
        this.puntajes[2].aciertos += 1;
        break;
      default:
        break;
    }
    localStorage.setItem('puntajes',JSON.stringify(this.puntajes));;
  }

}

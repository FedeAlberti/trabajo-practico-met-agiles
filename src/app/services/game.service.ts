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
          aciertos: 0,
          fallos: 0,
        },      
        {
          nivel: 'medio',
          aciertos: 0,
          fallos: 0,
        },
        {
          nivel: 'dificil',
          aciertos: 0,
          fallos: 0,
        }
    ];
    localStorage.setItem('puntajes',JSON.stringify(this.puntajes));
  }

  getPuntajeActual() : any {
    this.puntajes = JSON.parse(localStorage.getItem('puntajes'));
  }

  actualizarPuntaje(dificultad: any, acierto) : void {
    this.getPuntajeActual();
    switch (dificultad) {
      case 'facil':
        this.setPuntaje(acierto,0);
        break;
      case 'medio':
        this.setPuntaje(acierto,1);
        break;
      case 'dificil':
        this.setPuntaje(acierto,2);
        break;
      default:
        break;
    }
    localStorage.setItem('puntajes',JSON.stringify(this.puntajes));;
  }

  setPuntaje(acierto,dificultad){
    if(acierto){
      this.puntajes[dificultad].aciertos += 1;
    }
    else {
      this.puntajes[dificultad].fallos +=1;
    }      
  }

}

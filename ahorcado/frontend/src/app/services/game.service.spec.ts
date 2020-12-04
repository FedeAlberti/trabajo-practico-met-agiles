import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería guardar el usuario',() => {
    service.guardarUsuario('foo');
    expect(localStorage.getItem('usuario')).toBeTruthy();
  })

  it('debería inicializar los puntajes del usuario',() => {
    service.inicializarPuntaje();
    expect(localStorage.getItem('puntajes')).toBeTruthy();
  })

  it('debería sumar 1 al puntaje del nivel fácil', () => {
    service.inicializarPuntaje();
    let nivel = 'facil';
    service.getPuntajeActual();
    let puntajes = service.puntajes;
    service.actualizarPuntaje(nivel,true);
    expect(service.puntajes[0].aciertos - puntajes[0].aciertos).toEqual(1);
    
  })

  it('debería devolver falso si el usuario no está guardado', () => {
    localStorage.removeItem('usuario');
    expect(service.checkUsuario()).toBeFalse();
  })

  it('debería devolver verdadero si el usuario está guardado', () => {
    service.guardarUsuario('foo');
    expect(service.checkUsuario()).toBeTrue();
  })

});

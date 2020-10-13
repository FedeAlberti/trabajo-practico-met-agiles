import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';

import { JuegoComponent } from './juego.component';

describe('JuegoComponent', () => {
  let component: JuegoComponent;
  let fixture: ComponentFixture<JuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería empezar juego', () => {
    expect(component).toBeTruthy();
  });

  //Test para comprobar si se crea una palabra a adivinar.
  it('debería contener palabra a adivinar', () => {
    expect(component.palabraAdivinar).toEqual('hola');
  });

  it('debería contener palabra oculta', () => {
    component.generarPalabraOculta();
    expect(component.palabraOculta).toEqual('----');
  });

  it('debería ingresar una letra',() => {
    let letra = 'a';
    component.ingresarLetra(letra);
    let bandera = false;
    bandera = component.letrasArriesgadas.includes(letra);
    expect(bandera).toBeTruthy();
  })

  it('deberia agregar la letra valida a la palabra oculta',() => {
    let letra = 'a';
    component.checkLetra(letra);
    expect(component.palabraOculta).toContain(letra);
  })

  it('deberia sumar 1 a la cantidad de fallos',() => {
    let letra = 'j';
    let fallosAnterior = component.fallos; 
    component.checkLetra(letra);
    let fallosActuales = component.fallos;
    expect(fallosActuales).toEqual(1); 
  })

  it('deberia ganar partida',() => {
    component.palabraOculta = component.palabraAdivinar;
    component.checkResultado();
    expect(component.resultado).toEqual('Win'); 
  })

  it('deberia perder partida',() => {
    component.fallos = 6;
    component.checkResultado();
    expect(component.resultado).toEqual('Lose'); 
  })

});

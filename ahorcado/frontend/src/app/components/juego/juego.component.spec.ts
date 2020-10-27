import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('debería generar una palabra al azar', () => {
    let palabra=component.generarPalabraAdivinar();
    expect(palabra).not.toBeNull();
  });

  it('debería generar un nuevo juego', () => {
    component.generarJuego();
    
    expect(component.fallos).toEqual(0);
    expect(component.palabraAdivinar).toBeTruthy();
    expect(component.resultado).toEqual("");
    let cantidaddeletrasiguales = (component.palabraOculta.length === component.palabraAdivinar.length)
    expect(cantidaddeletrasiguales).toBeTrue();
    expect(component.letrasArriesgadas).toEqual([]);

  });

  it('debería contener palabra oculta', () => {
    component.generarJuego();
    component.generarPalabraOculta();
    let cantidaddeletrasiguales = (component.palabraOculta.length === component.palabraAdivinar.length)
    expect(cantidaddeletrasiguales).toBeTrue();
  });

  it('debería ingresar una letra y validarla',() => {
    component.generarJuego();
    
    let letra = component.palabraAdivinar[0];;
    component.ingresarLetra(letra);
    let letraAdivinada = component.palabraAdivinar.includes(letra);
    expect(letraAdivinada).toBeTruthy();
  })

  it('deberia agregar la letra valida a la palabra oculta',() => {
    component.generarJuego();
    
    let letra = component.palabraAdivinar[0];;
    component.ingresarLetra(letra);
    console.log(component.palabraOculta)
    expect(component.palabraOculta).toContain(letra);
  })

  it('deberia sumar 1 a la cantidad de fallos',() => {
    component.generarJuego();
    let letra = 'Z';
    component.checkLetra(letra);
    expect(component.fallos).toEqual(1); 
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

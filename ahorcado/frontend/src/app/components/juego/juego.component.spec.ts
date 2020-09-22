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

  it('debería empezar juego', () => {
    expect(component).toBeTruthy();
  });

  //Test para comprobar si se crea una palabra a adivinar.
  it('debería contener palabra a adivinar', () => {
    expect(component.palabraAdivinar).toBeTruthy();
  });

  it('debería contener palabra oculta', () => {
    component.generarPalabraOculta();
    expect(component.palabraOculta).toBeTruthy();
  });

  it('debería ingresar una letra',() => {
    let letra = 'a';
    component.ingresarLetra(letra);
    let bandera = false;
    bandera = component.letrasArriesgadas.includes(letra);
    expect(bandera).toBeTruthy();


  })

});

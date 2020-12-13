import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPuntajesComponent } from './tabla-puntajes.component';

describe('TablaPuntajesComponent', () => {
  let component: TablaPuntajesComponent;
  let fixture: ComponentFixture<TablaPuntajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPuntajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //UNIT TESTS
  it('debería calcular el porcentaje de aciertos', ()=> {
    let puntaje = {
      nivel:'',
      aciertos:2,
      fallos:8,
    }
    let porcentaje = component.calcularPorcentaje(puntaje);
    expect(porcentaje).toEqual(20);
  });


  //ACCEPTANCE TESTS
  it('debería poner en rojo el color de la barra de efectividad', ()=> {
    let puntaje = {
      nivel:'',
      aciertos:2,
      fallos:8,
    }
    let color = component.validarColor(puntaje);
    expect(color).toEqual("red");
  });

  it('debería poner en amarillo el color de la barra de efectividad', ()=> {
    let puntaje = {
      nivel:'',
      aciertos:5,
      fallos:5,
    }
    let color = component.validarColor(puntaje);
    expect(color).toEqual("yellow");
  });

  it('debería poner en verde el color de la barra de efectividad', ()=> {
    let puntaje = {
      nivel:'',
      aciertos:8,
      fallos:2,
    }
    let color = component.validarColor(puntaje);
    expect(color).toEqual("green");
  });

});

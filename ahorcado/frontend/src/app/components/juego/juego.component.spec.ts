import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HorcaComponent } from './horca/horca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JuegoComponent } from './juego.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';


describe('JuegoComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let component: JuegoComponent;
  let fixture: ComponentFixture<JuegoComponent>;
  let activatedRoute: ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoComponent, HorcaComponent, MatConfirmDialogComponent, FormGroupDirective],
      imports: [MatDialogModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ 'dificultad': 'facil' }) } }
        }
      ]

    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoComponent);
    component = fixture.componentInstance;
    activatedRoute
    fixture.detectChanges();
  });

  it('debería generar una palabra al azar', () => {
    component.palabrasPosible = ["PALABRAS", "PARA", "EL", "TEST"];
    let palabra = component.generarPalabraAdivinar();
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

  it('debería ingresar una letra y validarla', () => {
    component.generarJuego();

    let letra = component.palabraAdivinar[0];;
    component.CoincideLetra(letra);

    let letraAdivinada = component.palabraAdivinar.includes(letra);
    expect(letraAdivinada).toBeTruthy();
  })

  it('deberia agregar la letra valida a la palabra oculta', () => {
    component.generarJuego();

    let letra = component.palabraAdivinar[0];;
    component.CoincideLetra(letra);
    expect(component.palabraOculta).toContain(letra);
  })

  it('deberia sumar 1 a la cantidad de fallos', () => {
    component.generarJuego();
    let letra = 'Z';
    component.CoincideLetra(letra);
    expect(component.fallos).toEqual(1);
  })

  it('deberia ganar partida', () => {
    component.palabraOculta = component.palabraAdivinar;
    component.CheckResultado(component.palabraAdivinar);
    expect(component.resultado).toEqual('Win');
  })

  it('deberia perder partida', () => {
    component.fallos = 6;
    component.CheckResultado('palabrafals');
    expect(component.resultado).toEqual('Lose');
  })

  it('debería arriesgar palabra correcta y ganar la partida', () => {
    component.arriesgarForm.patchValue({ palabra: component.palabraAdivinar });
    component.arriesgar();
    expect(component.resultado).toEqual('Win');
  })


  it('debería arriesgar palabra correcta y perder la partida', () => {
    component.arriesgarForm.patchValue({ palabra: 'palabra-incorrecta' });
    component.arriesgar();
    expect(component.resultado).toEqual('Lose');
  })

  /* 
    Tests de Front-End
  */
  it('deberia cambiar el estado del boton a bloqeuado', () => {

    component.generarJuego();
    const primeraLetra = component.palabraAdivinar[0];

    var boton = {
      bloqueado: false,
      letra: primeraLetra
    }

    component.PresionarBoton(boton)

    expect(boton.bloqueado).toBeTrue()

  });

}

)

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HorcaComponent } from './horca/horca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JuegoComponent } from './juego.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';


describe('JuegoComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let component: JuegoComponent;
  let fixture: ComponentFixture<JuegoComponent>;
  let activatedRoute: ActivatedRoute;
  let service: GameService = new GameService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoComponent, HorcaComponent, MatConfirmDialogComponent, FormGroupDirective],
      imports: [MatDialogModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ 'dificultad': 'facil' }) } }
        },
        {
          provide: GameService,
          useValue: service
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

//UNIT TESTS

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
    //Inicialización del usuario 
    service.guardarUsuario('user');
    component.arriesgarForm.patchValue({ palabra: 'palabra-incorrecta' });
    component.arriesgar();
    expect(component.resultado).toEqual('Lose');
  })


  //UI ACCEPTANCE TESTS

  it('deberia cambiar el estado del boton a bloqeuado', () => {
    //Inicialización del usuario 
    service.guardarUsuario('user');

    component.generarJuego();

    const primeraLetra = component.palabraAdivinar[0];

    var boton = {
      bloqueado: false,
      letra: primeraLetra
    }

    component.PresionarBoton(boton)

    expect(boton.bloqueado).toBeTrue()

  });

  //ACCEPTANCE TESTS

  it('debería iniciar nuevo juego, ingresar 6 letras incorrectas y perder la partida', () => {
    //Inicialización del usuario 
    service.guardarUsuario('user');
    //Inicialización del juego
    component.generarJuego();
    //El usuario ingresa 6 letras incorrectas
      component.buttons.forEach(button => {
        if(component.fallos===6)
          return
        component.PresionarBoton(button)
      });
    //Comprobamos si se el usuario perdió
    expect(component.resultado).toEqual('Lose');
  
  });

  it('debería iniciar nuevo juego, ingresar 6 letras correctas y ganar la partida', () => {
    //Inicialización del usuario 
    service.guardarUsuario('user');
    //Inicialización del juego
    component.generarJuego();
    //El usuario ingresa 6 letras correctas
      for (let index = 0; index < component.palabraAdivinar.length; index++) {
        let button = component.buttons.find(btn => btn.letra === component.palabraAdivinar[index]);
        component.PresionarBoton(button);       
      }
    //Comprobamos si se el usuario ganó
    expect(component.resultado).toEqual('Win');
  });


}


)





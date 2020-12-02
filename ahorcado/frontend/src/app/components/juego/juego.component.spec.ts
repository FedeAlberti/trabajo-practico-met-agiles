import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HorcaComponent } from './horca/horca.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { JuegoComponent } from './juego.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

describe('JuegoComponent', () => {
  let component: JuegoComponent;
  let dialog: MatConfirmDialogComponent;
  let fixture: ComponentFixture<JuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoComponent, HorcaComponent, MatConfirmDialogComponent ],
      imports: [MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule]
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
    component.CoincideLetra(letra);

    let letraAdivinada = component.palabraAdivinar.includes(letra);
    expect(letraAdivinada).toBeTruthy();
  })

  it('deberia agregar la letra valida a la palabra oculta',() => {
    component.generarJuego();
    
    let letra = component.palabraAdivinar[0];;
    component.CoincideLetra(letra);
    console.log(component.palabraOculta)
    expect(component.palabraOculta).toContain(letra);
  })

  it('deberia sumar 1 a la cantidad de fallos',() => {
    component.generarJuego();
    let letra = 'Z';
    component.CoincideLetra(letra);
    expect(component.fallos).toEqual(1); 
  })

  it('deberia ganar partida',() => {
    component.palabraOculta = component.palabraAdivinar;
    component.CheckResultado();
    expect(component.resultado).toEqual('Win'); 
  })

  it('deberia perder partida',() => {
    component.fallos = 6;
    component.CheckResultado();
    expect(component.resultado).toEqual('Lose'); 
  })

  it('debería arriesgar palabra correcta y ganar la partida', () => {
    component.arriesgarForm.patchValue({palabra: component.palabraAdivinar});
    component.arriesgar();
    expect(component.resultado).toEqual('Win');
  })

  
  it('debería arriesgar palabra correcta y ganar la partida', () => {
    component.arriesgarForm.patchValue({palabra: 'palabra-incorrecta'});
    component.arriesgar();
    expect(component.resultado).toEqual('Lose');
  })

  /* 
    Tests de Front-End
  */
  it('deberia cambiar el color del boton', () =>{
    let prop_letras_correctas = 0;
    let prop_letras_incorrectas = 0;
    let prop_letras_correctas_nuevas = 0;
    let prop_letras_incorrectas_nuevas = 0;

    component.buttons.forEach(button => {
      if(button.estado === "letra-correcta")
      prop_letras_correctas ++;
      else prop_letras_incorrectas ++;
    }) 
    var boton = {
      bloqueado: true,
      estado: "letra-correcta",
      letra: "C"
    }
    component.PresionarBoton(boton);
  
    component.buttons.forEach(button => {
        if(button.estado === "letra-correcta")
          prop_letras_correctas_nuevas ++;
        else prop_letras_incorrectas_nuevas ++;
    })

  if(component.palabraAdivinar.includes(boton.letra))
    expect(prop_letras_correctas < prop_letras_correctas_nuevas && prop_letras_incorrectas == prop_letras_incorrectas_nuevas).toBeTruthy;
  else
    expect(prop_letras_correctas < prop_letras_correctas_nuevas && prop_letras_incorrectas == prop_letras_incorrectas_nuevas).toBeFalsy;
  })
  
});


 
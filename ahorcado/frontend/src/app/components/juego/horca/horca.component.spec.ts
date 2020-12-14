import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoComponent } from '../juego.component';

import { HorcaComponent } from './horca.component';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SimpleChange } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('HorcaComponent', () => {
  let component: HorcaComponent;
  let fixture: ComponentFixture<HorcaComponent>;
  let juego_fixture: ComponentFixture<JuegoComponent>;
  const regex = "../..";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorcaComponent, JuegoComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ 'dificultad': 'facil' }) } }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    juego_fixture = TestBed.createComponent(JuegoComponent);
    juego_fixture.detectChanges();
  });



  //UI ACCEPTANCE TESTS


  it('debería mostrar el cuerpo entero del ahorcado al perder', () => {
    let fallos_esperados = 6;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    expect(component.urlImagen).toEqual("../../assets/img/6.jpg");
  })

  it('debería mostrar 5 extremidades del ahorcado al fallar 5 veces', () => {
    let fallos_esperados = 5;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    expect(component.urlImagen).toEqual("../../assets/img/5.jpg");
  })

  it('debería mostrar 4 extremidades del ahorcado al fallar 4 veces', () => {
    let fallos_esperados = 4;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    expect(component.urlImagen).toEqual("../../assets/img/4.jpg");
  })

  it('debería mostrar 3 extremidades del ahorcado al fallar 3 veces', () => {
    let fallos_esperados = 3;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    expect(component.urlImagen).toEqual("../../assets/img/3.jpg");
  })

  it('debería mostrar 2 extremidades del ahorcado al fallar 2 veces', () => {
    let fallos_esperados = 2;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    expect(component.urlImagen).toEqual("../../assets/img/2.jpg");
  })

  it('debería mostrar 1 extremidad del ahorcado al fallar 1 vez', () => {
    let fallos_esperados = 1;
    component.fallos = fallos_esperados;
    component.ngOnChanges();
    expect(component.urlImagen).toEqual("../../assets/img/1.jpg");
  })

  //Lo hice obteniendo el img element del html y validando su propiedad src
  it('no debería mostrar ninguna extremidad del ahorcado cuando no hay fallos', () => {
    let fallos_esperados = 0;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    const bannerElement: HTMLElement = fixture.nativeElement;
    const img = bannerElement.querySelector('img');
    expect(img.src).toContain(component.urlImagen.replace(regex,''));
  })

 
});

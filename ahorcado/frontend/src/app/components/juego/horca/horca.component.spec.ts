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
  let juego_component: JuegoComponent;

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
    juego_component = juego_fixture.componentInstance;
    juego_fixture.detectChanges();
  });


  /* 
    ACCEPTANCE TESTS
  */

  it('debería mostrar el cuerpo entero del ahorcado al perder', () => {
    let fallos_esperados = 6;
    component.fallos = fallos_esperados;
    component.ngOnChanges()
    expect(component.urlImagen).toEqual("../../assets/img/6.jpg");
  })

});

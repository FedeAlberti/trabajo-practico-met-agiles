import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoComponent } from '../juego.component';

import { HorcaComponent } from './horca.component';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


describe('HorcaComponent', () => {
  let component: HorcaComponent;
  let fixture: ComponentFixture<HorcaComponent>;
  let juego_fixture: ComponentFixture<JuegoComponent>;
  let juego_component: JuegoComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorcaComponent , JuegoComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} }
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
    juego_fixture .detectChanges();
  });

/* 
  Tests de Front-End
  */
  it('debería cambiar agregar un miembro en la imagen del ahorcado', () => {
    let url_imagen_horca = component.urlImagen;
    let url_imagen_horca_nueva = component.urlImagen;

    let letra = 'C';
    juego_component.CoincideLetra(letra);

    url_imagen_horca = component.urlImagen;
    
    if(juego_component.palabraAdivinar.includes("C"))
      expect(url_imagen_horca_nueva.match(url_imagen_horca)).toBeTruthy;
    else expect(url_imagen_horca_nueva.match(url_imagen_horca)).toBeTruthy;
  })

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';

describe('MatConfirmDialogComponent', () => {
  let component: MatConfirmDialogComponent;
  let fixture: ComponentFixture<MatConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatConfirmDialogComponent ],
      imports: [
        MatDialogModule
      ],
      providers: [
        {
          // I was expecting this will pass the desired value
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  /* ACCEPTANCE TESTS */
  it('debería mostrar imagen de partida ganada', () => {
    let expectedParameter = 'win';
    component.data.modo = expectedParameter;
    component.setDialog();
    expect(component.image).toEqual("../../assets/img/winner.png");
  })

  it('debería mostrar imagen de partida perdida', () => {
    let expectedParameter = 'lose';
    component.data.modo = expectedParameter;
    component.setDialog();
    expect(component.image).toEqual("../../assets/img/6.jpg");
  })

});

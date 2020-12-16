import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [RouterTestingModule],
      providers:[
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar a nickname', () => {
    localStorage.removeItem('usuario');
    component.goToGame('');
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/nickname']);
 });

 it('debería navegar a facil', () => {
  localStorage.setItem('usuario','foo');
  component.goToGame('facil');
  expect (routerSpy.navigate).toHaveBeenCalledWith(['/juego','facil']);
});

it('debería navegar a medio', () => {
  localStorage.setItem('usuario','foo');
  component.goToGame('medio');
  expect (routerSpy.navigate).toHaveBeenCalledWith(['/juego','medio']);
});

it('debería navegar a difícil', () => {
  localStorage.setItem('usuario','foo');
  component.goToGame('dificil');
  expect (routerSpy.navigate).toHaveBeenCalledWith(['/juego','dificil']);
});

});

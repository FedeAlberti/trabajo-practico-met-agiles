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

  it('Debe empezar juego', () => {
    expect(component).toBeTruthy();
  });

  //Test para comprobar si se crea una palabra a adivinar.
  it('debe contener palabra a adivinar', () => {
    expect(component.palabraAdivinar).toBeTruthy();
  });

  it('debe contener palabra oculta', () => {
    component.generarPalabraOculta();
    expect(component.palabraOculta).toBeTruthy();
  });

});

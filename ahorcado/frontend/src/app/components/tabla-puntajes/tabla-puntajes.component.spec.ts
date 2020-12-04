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
});

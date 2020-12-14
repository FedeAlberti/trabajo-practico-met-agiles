import { TestBed, async } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { TablaPuntajesComponent } from './components/tabla-puntajes/tabla-puntajes.component';

describe('AppComponent', () => {
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavBarComponent
      ],
      imports:[
        RouterTestingModule.withRoutes([{
          path: '',
          component:InicioComponent
        },
        {
          path:'puntajes',
          component:TablaPuntajesComponent
        }
      ])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ahorcado'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Ahorcado');
  });
  
});

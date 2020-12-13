import { analyzeAndValidateNgModules } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarComponent } from './nav-bar.component';


describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [RouterTestingModule],
      providers:[
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

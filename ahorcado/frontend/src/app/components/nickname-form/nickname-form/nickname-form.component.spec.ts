import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import { NicknameFormComponent } from './nickname-form.component';

describe('NicknameFormComponent', () => {
  let component: NicknameFormComponent;
  let fixture: ComponentFixture<NicknameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameFormComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule,FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería guardar el nickname del usuario', () => {
    
    component.nicknameForm.patchValue({
      userName: 'foo'
    });
    component.guardarUsuario();
    let usuario = localStorage.getItem('usuario');
    expect(usuario).toBeTruthy();
  })

});

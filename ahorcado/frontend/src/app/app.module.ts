import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestingExampleComponent } from './components/testing-example/testing-example.component';
import { JuegoComponent } from './components/juego/juego.component';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HorcaComponent } from './components/juego/horca/horca.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NicknameFormComponent } from './components/nickname-form/nickname-form/nickname-form.component';
import { TablaPuntajesComponent } from './components/tabla-puntajes/tabla-puntajes.component'

@NgModule({
  declarations: [
    AppComponent,
    TestingExampleComponent,
    JuegoComponent,
    MatConfirmDialogComponent,
    HorcaComponent,
    NavBarComponent,
    InicioComponent,
    NicknameFormComponent,
    TablaPuntajesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

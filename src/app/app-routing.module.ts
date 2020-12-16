import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { JuegoComponent } from './components/juego/juego.component';
import { NicknameFormComponent } from './components/nickname-form/nickname-form/nickname-form.component';
import { TablaPuntajesComponent } from './components/tabla-puntajes/tabla-puntajes.component'


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'juego/:dificultad', component: JuegoComponent},
  { path: 'nickname', component: NicknameFormComponent},
  { path: 'puntajes', component: TablaPuntajesComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { JuegoComponent } from './components/juego/juego.component';
import { NicknameFormComponent } from './components/nickname-form/nickname-form/nickname-form.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'juego', component: JuegoComponent},
  { path: 'nickname', component: NicknameFormComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

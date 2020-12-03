import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { JuegoComponent } from './components/juego/juego.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'juego', component: JuegoComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

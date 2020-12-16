import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  urlImagen = '../../assets/img/ahorcado-inicio.png';

  constructor(private gameService:GameService,
    private router:Router) { }

  ngOnInit(): void {
  }

  goToGame(dificultad) {
    if(this.gameService.checkUsuario()){
      this.router.navigate(['/juego',dificultad]);
    }
    else {
      this.router.navigate(['/nickname']);
    }
  }

}

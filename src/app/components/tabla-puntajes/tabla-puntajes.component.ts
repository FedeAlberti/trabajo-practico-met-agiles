import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-tabla-puntajes',
  templateUrl: './tabla-puntajes.component.html',
  styleUrls: ['./tabla-puntajes.component.css']
})
export class TablaPuntajesComponent implements OnInit {

  puntajes = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getPuntajeActual();
    this.puntajes = this.gameService.puntajes;
  }


  calcularPorcentaje(p) {
    return ((p.aciertos) / (p.aciertos + p.fallos) * 100)
  }

  validarColor(p) {
    let promedio = this.calcularPorcentaje(p);

    switch (true) {
      case (promedio <= 40):
        return "red"
      case (promedio <= 70):
        return 'yellow'
      default:
        return 'green'
    }

  }

}

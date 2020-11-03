import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {


  palabrasPosible= ["HOLA","PERRO","GATO","TERO"]
  palabraAdivinar = "";
  palabraOculta = "";
  letrasArriesgadas= [];
  fallos = 0;
  resultado = '';
  buttons: Array<{letra:string, estado:string}>;
  readonly LETRAS = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];

  constructor(private dialog:MatDialog) { 
    this.generarJuego();
  }

  ngOnInit(): void {
  }

  generarJuego(){
    this.fallos = 0;
    this.palabraAdivinar = this.generarPalabraAdivinar();
    this.generarPalabraOculta();
    this.resultado = "";
    this.letrasArriesgadas= [];
    this.inicializarBotones();
  }

  openConfirmDialog(msg) {
    this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      disableClose:true,
      data: {
        message:msg,
      }
    })
      .afterClosed().subscribe(() => this.generarJuego());
  }

  inicializarBotones() {
    this.buttons=[];
    
    this.LETRAS.forEach(letra => {
      this.buttons.push({letra: letra, estado: "letra-no-pulsada"});      
    });

  }

  generarPalabraAdivinar() : string{
    let n = Math.floor(Math.random() * this.palabrasPosible.length);
    return this.palabrasPosible[n];
  }

  generarPalabraOculta(){
    this.palabraOculta="";
    
    for (let i = 0; i < this.palabraAdivinar.length; i++) { 
      this.palabraOculta += "_";      
    }
  }

  ingresarLetra(button) {

    this.letrasArriesgadas.push(button.letra);
    let bandera=false;
    
    for (let index = 0; index < this.palabraAdivinar.length; index++) {
      if (this.palabraAdivinar[index] === button.letra  ) {
        this.palabraOculta = 
          this.palabraOculta.substr(0,index) +
          button.letra +
          this.palabraOculta.substr(index + 1);

        bandera = true;
        button.estado = "letra-correcta" ;
        if (this.palabraAdivinar === this.palabraOculta) {
          this.openConfirmDialog("Has adivinado la palabrar!!!");
        }
      }
    }

    if (!bandera){
      
      this.fallos ++;
      debugger;
      button.estado = "letra-incorrecta"; 
      
      if (this.fallos === 6) {
        this.openConfirmDialog("Has perdido!");
      }
    }

  }

  

  checkResultado() {
    if(this.fallos === 6) {
      this.resultado = 'Lose';
    }
    if(this.palabraOculta === this.palabraAdivinar) {
      this.resultado = 'Win';
    }
  }


}

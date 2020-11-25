import { isGeneratedFile } from '@angular/compiler/src/aot/util';
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
  buttons: Array<{letra:string, estado:string, bloqueado: boolean}>;
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
      this.buttons.push({letra: letra, estado: "letra-no-pulsada", bloqueado: false });      
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

  PresionarBoton(button){
    if(button.bloqueado)
    return

    const resp = this.CoincideLetra(button.letra)

    this.ButtonChange(resp, button);

    this.CheckResultado()

    this.CartelResultado()

  }

  private ButtonChange(resp: boolean, button: any) {
    if (resp) {
      button.bloqueado = true;
      button.estado = "letra-correcta";
    }
    else {
      button.estado = "letra-incorrecta";
      button.bloqueado = true;
    }
  }

  private CartelResultado(){
    if (this.resultado === 'Win') {
      this.openConfirmDialog("Has adivinado la palabrar!!!");
    }

    if (this.resultado === 'Lose') {
      this.openConfirmDialog("Has perdido!");
    }
  }
  
  public CheckResultado() {
    if(this.fallos === 6) {
      this.resultado = 'Lose';
    }
    if(this.palabraOculta === this.palabraAdivinar) {
      this.resultado = 'Win';
    }
  }

  public CoincideLetra(letra:string):boolean{

    this.letrasArriesgadas.push(letra)
    
    let bandera=true;

    for (let index = 0; index < this.palabraAdivinar.length; index++) {
      if (this.palabraAdivinar[index] === letra  ) {
        this.palabraOculta = 
          this.palabraOculta.substr(0,index) +
          letra +
          this.palabraOculta.substr(index + 1);

        bandera = false;
      }
    }

    if (bandera){
      this.fallos ++;
    }

    return bandera

  }

  ingresarLetra(button) {

    debugger;
    if(button.bloqueado)
      return

    this.letrasArriesgadas.push(button.letra);
    let bandera=false;
    
    for (let index = 0; index < this.palabraAdivinar.length; index++) {
      if (this.palabraAdivinar[index] === button.letra  ) {
        this.palabraOculta = 
          this.palabraOculta.substr(0,index) +
          button.letra +
          this.palabraOculta.substr(index + 1);

        bandera = true;
        button.bloqueado = true;
        button.estado = "letra-correcta" ;

        if (this.palabraAdivinar === this.palabraOculta) {
          this.openConfirmDialog("Has adivinado la palabrar!!!");
        }
      }
    }

    if (!bandera){
      
      this.fallos ++;
      button.estado = "letra-incorrecta"; 
      button.bloqueado = true;
      if (this.fallos === 6) {
        this.openConfirmDialog("Has perdido!");
      }
    }

  }

}

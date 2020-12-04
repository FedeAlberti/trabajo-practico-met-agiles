import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  dificultad:any;

  palabrasDificiles = [
    "ARTERIOSCLEROSIS",
    "WHISKEY",
    "ELECTROCARDIOGRAMA",
    "ELECTROENCEFALOGRAFIA",
    "PISCIS",
    "ESTERNOCLEIDOMASTOIDEO",
    "KAYAK"
  ]
  palabrasMedias = [
    "ARTERIA",
    "COMPUTADORA",
    "PASTILLA",
    "JARABE",
    "BICICLETA",
    "FLAN",
    "COLCHONETA"
  ]
  palabrasFaciles = [
    "HOLA",
    "PERRO",
    "GATO",
    "TERO",
    "BANANA",
    "ALARMA"
  ]

  palabrasPosible = []; 
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

  arriesgarForm = new FormGroup({
    palabra: new FormControl('',Validators.required),
  })

  constructor(private dialog:MatDialog, 
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router ) { 
      this.generarJuego();
  }

  ngOnInit(): void {
    console.log(this.dificultad);
    
  }

  generarJuego(){
    this.dificultad = this.route.snapshot.paramMap.get('dificultad');
    this.setDificultad();
    this.fallos = 0;
    this.palabraAdivinar = this.generarPalabraAdivinar();
    this.generarPalabraOculta();
    this.resultado = "";
    this.letrasArriesgadas= [];
    this.inicializarBotones();
    this.arriesgarForm.patchValue({
      palabra: ''
    });
    
  }

  openConfirmDialog(msg,modo) {
    this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      disableClose:true,
      data: {
        message:msg,
        modo:modo,
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
      this.openConfirmDialog("Has adivinado la palabra!!!","win");
    }

    if (this.resultado === 'Lose') {
      this.openConfirmDialog("Has perdido!!!","lose");
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

  arriesgar() : void {
    if(this.arriesgarForm.controls.palabra.value.toUpperCase() === this.palabraAdivinar) {
      this.resultado = 'Win';
      this.gameService.actualizarPuntaje(this.dificultad,true);
      this.openConfirmDialog("Has adivinado la palabrar!!!","win");
    }
    else {
      this.resultado = 'Lose';
      this.openConfirmDialog("Has perdido!","lose");
    }
  }

  setDificultad() {
    switch (this.dificultad) {
      case 'facil':
        this.dificultad === 'facil';     
        this.palabrasPosible = this.palabrasFaciles;
        break;
      case 'medio':
        this.dificultad === 'medio';
        this.palabrasPosible= this.palabrasMedias;
        break;
      case 'dificil':
        this.dificultad === 'dificil';
        this.palabrasPosible = this.palabrasDificiles;
        break
      default:
        this.router.navigateByUrl('');
        break;
    }
  }
}
  


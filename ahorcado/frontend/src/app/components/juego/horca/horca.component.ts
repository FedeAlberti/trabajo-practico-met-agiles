import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horca',
  templateUrl: './horca.component.html',
  styleUrls: ['./horca.component.css']
})
export class HorcaComponent implements OnInit {

  @Input() public palabraOculta: string;
  @Input() public fallos: number = 0;

  urlImagen:string


  ngOnInit(): void {
    this.urlImagen = "../../assets/img/0.jpg";
  }

  ngOnChanges(changes: any):void{;
    this.urlImagen= "../../assets/img/"+this.fallos+".jpg"
  }


}

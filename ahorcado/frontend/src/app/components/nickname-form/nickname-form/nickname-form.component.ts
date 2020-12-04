import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-nickname-form',
  templateUrl: './nickname-form.component.html',
  styleUrls: ['./nickname-form.component.css']
})
export class NicknameFormComponent implements OnInit {
  

  dificultad: any;
  nicknameForm = new FormGroup({
    userName: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  })
  
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private gameService: GameService) { }
    
  ngOnInit(): void {
    switch (this.route.snapshot.paramMap.get('dificultad')) {
      case 'facil':
        this.dificultad === 'facil';     
        break;
      case 'medio':
        this.dificultad === 'medio';
        break;
      case 'dificil':
        this.dificultad === 'dificil';
        break
      default:
        this.router.navigateByUrl('');
        break;
    }
  }

  guardarUsuario() {
    let usuario = this.nicknameForm.controls.userName.value;
    this.gameService.guardarUsuario(usuario);
    this.router.navigateByUrl('');
  }




}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nickname-form',
  templateUrl: './nickname-form.component.html',
  styleUrls: ['./nickname-form.component.css']
})
export class NicknameFormComponent implements OnInit {

  nicknameForm = new FormGroup({
    userName: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  })
  
  constructor() { }
  ngOnInit(): void {
  }

}

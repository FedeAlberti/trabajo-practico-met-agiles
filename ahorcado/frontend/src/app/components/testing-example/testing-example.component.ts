import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-example',
  templateUrl: './testing-example.component.html',
  styleUrls: ['./testing-example.component.css']
})
export class TestingExampleComponent implements OnInit {

  content = 'hola';
  hideContent = true;
  severity = 423;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

}

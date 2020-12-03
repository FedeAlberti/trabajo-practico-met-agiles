import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  elems : any;
  instances : any;
  options = [];
  constructor() { }

  ngOnInit(): void {
    this.elems = document.querySelectorAll('.dropdown-trigger');
    this.instances = M.Dropdown.init(this.elems, this.options);
  }

}

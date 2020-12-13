import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.elems = document.querySelectorAll('.dropdown-trigger');
    this.instances = M.Dropdown.init(this.elems, this.options);
  }

  goToPuntajes() {
    this.router.navigate(['/puntajes']);
  }

}

import { Component, OnInit } from '@angular/core';

import resume from '../../../resume.json';
import menuItens from '../../../menuItens.json';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  Resume: any;
  MenuItens: any;
  constructor() { }

  ngOnInit() {
    this.Resume = resume;
    this.MenuItens = menuItens.itens;
  }
}

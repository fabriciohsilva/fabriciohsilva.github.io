import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Input() Resume;

  MenuItens: any;
  constructor() { }

  ngOnInit() {
    this.MenuItens = this.Resume.menus;
  }
}

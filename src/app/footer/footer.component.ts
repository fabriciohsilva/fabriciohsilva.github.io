import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openExternal(type) {
    switch (type) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/fabriciohsilva', '_blank');
        break;

      case 'github':
        window.open('https://github.com/fabriciohsilva', '_blank');
        break;

      case 'email':
        window.open('mailto:fabricioh.silva@live.com', '_blank');
        break;

      case 'cv':
        window.open('https://1drv.ms/w/s!Ape-wFxppJxygeQ2gA7HzoMDtFKQig', '_blank');
        break;

      case 'sourcerer':
        window.open('https://sourcerer.io/fabriciohsilva', '_blank');
        break;

      default:
        break;
    }
  }

}

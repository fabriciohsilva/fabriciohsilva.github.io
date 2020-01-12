import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  // templateUrl: './menu-item.component.html',
  template: `<a href="{{ href }}">{{ name }}</a>`,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input('href')
  href: string;
  @Input('name')
  name: string;

}

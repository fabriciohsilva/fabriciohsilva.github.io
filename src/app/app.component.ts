import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Resume from '../resume.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabriciohsilva.github.io';

  public constructor(private titleService: Title ) { }
  
  public setTitle() {
    const pageTitle = Resume.basics.name + ' | ' + 
                      Resume.basics.label + ' | ' + 
                      Resume.basics.location.region + ', ' + Resume.basics.location.country;
    this.titleService.setTitle( pageTitle );
  }

  ngOnInit() {
    this.setTitle();
  }


}

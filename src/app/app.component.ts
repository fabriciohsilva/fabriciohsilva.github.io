import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import resume from '../resume.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Resume: any;
  title = 'fabriciohsilva.github.io';

  public constructor(private titleService: Title ) { }
  
  public setTitle() {
    const pageTitle = this.Resume.basics.name + ' | ' + 
    this.Resume.basics.label + ' | ' + 
    this.Resume.basics.location.region + ', ' + this.Resume.basics.location.country;
    this.titleService.setTitle( pageTitle );
  }

  ngOnInit() {
    this.Resume = resume;
    this.setTitle();
  }
}

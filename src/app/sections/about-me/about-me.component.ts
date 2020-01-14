import { Component, OnInit } from '@angular/core';

import resume from '../../../resume.json';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  Resume: any;

  constructor() { }

  ngOnInit() {
    this.Resume = resume;
  }

}

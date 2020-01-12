import { Component, OnInit } from '@angular/core';

import resume from '../../../resume.json';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  Resume: any;

  constructor() { }

  ngOnInit() {
    this.Resume = resume;
  }

}

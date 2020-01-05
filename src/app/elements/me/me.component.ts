import { Component, OnInit } from '@angular/core';

import resume from '../../../resume.json';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  Resume: string;
  constructor() { }

  ngOnInit() {
    this.Resume = resume
    console.log(this.Resume);
  }

}

import { Component, OnInit } from '@angular/core';

import resume from '../../../resume.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  Skills: any;

  constructor() { }

  ngOnInit() {
    this.Skills = resume.skills;
  }

}

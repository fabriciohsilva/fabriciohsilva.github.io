import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
@Input() Resume;

  constructor() { }

  ngOnInit() {
  }

}

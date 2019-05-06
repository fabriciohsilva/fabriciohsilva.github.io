import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('projectCardAnimation', [
      state('in', style({
        'transform': 'translateY(0) rotate(-347deg)',
        'opacity': '0',
      })),
      state('void', style({
        'transform': 'translateY(-40%) rotate(0deg)',
        'opacity': '0'
      })),
      transition('void => *', animate('1s 500ms ease-in-out')),
      transition('* => void', animate('1s ease-in-out'))
    ])
    // ,
    // trigger('habilityAnimation', [
    //   state('in', style({
    //     'transform': 'translateY(0)',
    //     'opacity': '0',
    //   })),
    //   state('void', style({
    //     'transform': 'translateY(-40%)',
    //     'opacity': '0'
    //   })),
    //   transition('void => *', animate('1s 500ms ease-in-out')),
    //   transition('* => void', animate('1s ease-in-out'))
    // ])
  ]
})
export class ProjectsComponent implements OnInit {

  repositories: Array<any>;
  showRepos: Array<any>;

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {

    this.projectsService.getJSON().subscribe((repositories) => {
      this.repositories = repositories;
      this.showItens('all');
    });

  }

  showItens(type) {

    switch (type) {
      case 'mob':
        this.showRepos = this.repositories.filter( (item) => {

          if ( (item.description.includes('mobile'))
            || (item.description.includes('Mobile'))) {
            return item;
          }
        });
        break;

      case 'frt':
        this.showRepos = this.repositories.filter( (item) => {

          if ( (item.description.includes('front-end'))
            || (item.description.includes('Front-end'))) {
            return item;
          }
        });
        break;

      case 'bck':
        this.showRepos = this.repositories.filter( (item) => {

          if ( (item.description.includes('back-end'))
            || (item.description.includes('Back-end'))) {
            return item;
          }
        });
        break;

      default:
        this.showRepos = this.repositories;
        break;

    }
  }

  showGitHub() {
    window.open('https://github.com/fabriciohsilva?tab=repositories', '_blank');
  }

}

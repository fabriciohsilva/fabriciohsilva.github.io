import { Component, OnInit } from '@angular/core';
import { AboutTecsService } from '../services/about-tecs/about-tecs.service';

@Component({
  selector: 'app-about-tecs',
  templateUrl: './about-tecs.component.html',
  styleUrls: ['./about-tecs.component.scss']
})
export class AboutTecsComponent implements OnInit {

  cursos: Array<any> = [];
  totalEstudo: number;
  Tags: Array<any> = [];
  width: string;

  constructor(
    private aboutecsservice: AboutTecsService
  ) {
    this.totalEstudo = 0;
   }

  ngOnInit() {
    
    let qtdtags = 0;
    
    this.aboutecsservice.getJSON().subscribe((cursos) => {
      this.cursos = cursos.cursos;

      this.cursos.forEach(curso => {
        this.totalEstudo += curso.duracao;

        let tags = curso.tags;

        tags.forEach(tag => {

          if ( this.Tags.findIndex(x => x.tag === tag) === -1) {
            this.Tags.push({tag: tag, time: curso.duracao});
            console.log('itens: ', {tag: tag, time: curso.duracao});
          }

        });
        
      });

    });    
      
  }// end ngOnInit()

}// export class AboutTecsComponent implements OnInit

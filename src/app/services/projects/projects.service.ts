import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe();
  }

  public getJSON(): Observable<any> {
    return this.http.get('https://api.github.com/users/fabriciohsilva/repos?sort=updated');
  }// end public getJSON(): Observable<any>

}

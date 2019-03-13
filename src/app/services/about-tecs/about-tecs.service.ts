import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutTecsService {

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe();
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/about-tecs.json');
  }// end public getJSON(): Observable<any>
}

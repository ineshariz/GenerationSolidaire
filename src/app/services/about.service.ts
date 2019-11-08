import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {About} from "../models/about.model";

@Injectable()
export class AboutService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  private aboutUrl = 'http://localhost:8088/about/';


  public aboutForm(about) {
    return this.http.post<About>(this.aboutUrl, about, this.httpOptions);
  }
  public getAbout() {
    return this.http.get<About>(this.aboutUrl , this.httpOptions);
  }
  public modifierAbout(){
    return this.http.put<About>(this.aboutUrl , this.httpOptions );
  }
}

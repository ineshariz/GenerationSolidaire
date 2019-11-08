import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Event} from "../models/event.model";

@Injectable()
export class EventService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  private aboutUrl = 'http://localhost:8088/event';


  public eventForm(event) {
    return this.http.post<Event>(this.aboutUrl, event, this.httpOptions);
  }

public getEvent() {
  return this.http.get<Event[]>(this.aboutUrl , this.httpOptions);
}
public modifierEvent(){
  return this.http.put<Event>(this.aboutUrl , this.httpOptions );
}
}

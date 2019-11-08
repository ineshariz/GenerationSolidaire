import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {About} from "../models/about.model";
import {Notif} from "../models/notif.model";
import {not} from "rxjs/internal-compatibility";

@Injectable()
export class NotificationService {

  today = new Date();
  dateNow: Date = new Date();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    }),
  };

  constructor(private http: HttpClient) {
  }
  private eventUrl = 'http://localhost:8088/notif/';

  public aboutNotif(notif, volontaire) {
notif.message= volontaire.name +'souhaite devenir un volontaire' ;
    return this.http.post<Notif>(this.eventUrl, notif, this.httpOptions);
  }
  public getNotif() {
    return this.http.get<Notif[]>(this.eventUrl , this.httpOptions);
  }
  public modifierNotif(){
    return this.http.put<Notif>(this.eventUrl , this.httpOptions );
  }
}

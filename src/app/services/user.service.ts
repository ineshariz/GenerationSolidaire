import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Volontaire} from "../models/volontaire.model";
import {Contact} from "../models/contact.model";

@Injectable()
export class UserService {
  dateString: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  private userUrl = 'http://localhost:8088/entretien/';


  public createForm(volontaire) {
    this.dateString = volontaire.date;
    let newDate = new Date(this.dateString);
    volontaire.date = newDate;
    return this.http.post<Volontaire>(this.userUrl, volontaire, this.httpOptions);
  }
  public getVolontaireEtat() {
    return this.http.get<Volontaire[]>(this.userUrl, this.httpOptions);
  }
}

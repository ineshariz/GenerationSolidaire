import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from "../models/contact.model";

@Injectable()
export class ContactService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  private aboutUrl = 'http://localhost:8088/contact';


  public contactForm(contact) {
    return this.http.post<Contact>(this.aboutUrl, contact, this.httpOptions);
  }
  public getcontactList() {
    return this.http.get<Contact[]>(this.aboutUrl, this.httpOptions);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Blog} from "../models/blog.model";

@Injectable()
export class BlogService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  private aboutUrl = 'http://localhost:8088/Blog';


  public blogForm(event) {

    return this.http.post<Blog>(this.aboutUrl, event, this.httpOptions);
  }

  public getBlog() {
    return this.http.get<Blog[]>(this.aboutUrl , this.httpOptions);
  }
  public modifierBlog(){
    return this.http.put<Blog>(this.aboutUrl , this.httpOptions );
  }
}

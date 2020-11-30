import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private studentUrl= url.endPoints+'login';
  private adminUrl= url.endPoints+'adminLogin';
  constructor(private _http:HttpClient) { }
  adminLogin(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.adminUrl,body,httpOptions);
  }
  studentLogin(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.studentUrl,body,httpOptions);
  }
}

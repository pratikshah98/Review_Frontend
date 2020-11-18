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
  private baseUrl= url.endPoints+'login';
  
  constructor(private _http:HttpClient) { }
  studentLogin(item)
  {
    let body=JSON.stringify(item);
   // console.log(body);
    return this._http.post(this.baseUrl,body,httpOptions);
  }
}

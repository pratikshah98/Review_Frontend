import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private reviewUrl = url.endPoints+"review/";
  constructor(private _http:HttpClient) { }
  /*********************************** GET *****************************************/
  getAllReview()
  {
    return this._http.get(this.reviewUrl);
  }
}

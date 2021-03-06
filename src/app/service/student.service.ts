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
  private studentUrl = url.endPoints+"student/";
  private internStudent=url.endPoints+"internStudent/";
  private piechart=url.endPoints+"pichart/";
  constructor(private _http:HttpClient) { }
  /*********************************** GET *****************************************/
  getAllReview()
  {
    return this._http.get(this.reviewUrl);
  }
  pichartData()
  {
    return this._http.get(this.piechart);
  }
  barchatData()
  {
    return this._http.get(this.piechart+"barchart/");
  }
  lineChartData()
  {
    return this._http.get(this.piechart+"linechart/")
  }

  /*********************************** GET BY ID *****************************************/
  getStudentById(id){
    return this._http.get(this.studentUrl+id);
  }

  getIntenShipByStudentId(id)
  {
    return this._http.get(this.internStudent+id);
  }
  /*********************************** POST *****************************************/
  addReview(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.reviewUrl,body,httpOptions);
  }
  getReviewByInternshipId(id){
    return this._http.get(this.reviewUrl+"ByinternshipId/"+id);
  }
}

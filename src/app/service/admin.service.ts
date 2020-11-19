import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private locationUrl=url.endPoints+"location";
  private facultyUrl=url.endPoints+"faculty";
  private jobProfileUrl=url.endPoints+"job_profile";
  private studentUrl=url.endPoints+"student";
  private companyUrl=url.endPoints+"company";
  private courseUrl=url.endPoints+"course";
  private internshipUrl=url.endPoints+"internship";
  constructor(private _http:HttpClient) { }
  getAllLocation()
  {
    return this._http.get(this.locationUrl);
  }
  getAllFaculty()
  {
    return this._http.get(this.facultyUrl);
  }
  getAllJobProfile()
  {
    return this._http.get(this.jobProfileUrl);
  }
  getAllCourse()
  {
    return this._http.get(this.courseUrl);
  }
  getAllCompany()
  {
    return this._http.get(this.companyUrl);
  }
  getAllStudent()
  {
    return this._http.get(this.studentUrl);
  }
  addLocation(item)
  {
    let body=JSON.stringify(item);
   // console.log(body);
    return this._http.post(this.locationUrl,body,httpOptions);
  }
  addJobProfile(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.jobProfileUrl,body,httpOptions);
  }
  addCompany(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.companyUrl,body,httpOptions);
  }
  addCourse(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.courseUrl,body,httpOptions);
  }
  addFaculty(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.facultyUrl,body,httpOptions);
  }
  addStudent(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.studentUrl,body,httpOptions);
  }
  addInternship(item)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.internshipUrl,body,httpOptions);
  }
}

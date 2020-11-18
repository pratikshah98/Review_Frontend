import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
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
}

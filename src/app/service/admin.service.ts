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
  private locationUrl=url.endPoints+"location/";
  private facultyUrl=url.endPoints+"faculty";
  private jobProfileUrl=url.endPoints+"job_profile/";
  private studentUrl=url.endPoints+"student";
  private companyUrl=url.endPoints+"company/";
  private courseUrl=url.endPoints+"course/";
  private internshipUrl=url.endPoints+"internship/";
  private reviewUrl = url.endPoints+"review/";
  private internshipTypeUrl = url.endPoints+"internshipType/";
  constructor(private _http:HttpClient) { }
/*********************************** GET *****************************************/

  getAllInternship()
  {
    return this._http.get(this.internshipUrl);
  }
  getAllInternshipType()
  {
    return this._http.get(this.internshipTypeUrl);
  }
  getAllReview()
  {
    return this._http.get(this.reviewUrl);
  }
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
/*********************************** GET BY ID *****************************************/  
  getInternshipTypeById(id){
    return this._http.get(this.internshipTypeUrl+id);
  }
  getInternshipById(id){
    return this._http.get(this.internshipUrl+id);
  }
  getReviewById(id){
    return this._http.get(this.reviewUrl+id);
  }
  getCompanyById(id){
    return this._http.get(this.companyUrl+id);
  }
  getCourseById(id){
    return this._http.get(this.courseUrl+id);
  }
  getProfileById(id){
    return this._http.get(this.jobProfileUrl+id);
  }
  getLocationById(id){
    return this._http.get(this.locationUrl+id);
  }
/*********************************** POST *****************************************/

  addLocation(item)
  {
    let body=JSON.stringify(item);
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

  /*********************************** PUT *****************************************/
  updateIntenshipType(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.internshipTypeUrl+id,body,httpOptions);
  }
  updateIntenship(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.internshipUrl+id,body,httpOptions);
  }
  updateReview(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.reviewUrl+id,body,httpOptions);
  }
  updateCompany(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.companyUrl+id,body,httpOptions);
  }
  updateCourse(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.courseUrl+id,body,httpOptions);
  }
  updateProfile(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.jobProfileUrl+id,body,httpOptions);
  }
  updateLocation(id,item){
    let body=JSON.stringify(item);
    return this._http.put(this.locationUrl+id,body,httpOptions);
  }

/*********************************** DELETE *****************************************/
  deleteInternshiptype(id){
    return this._http.delete(this.internshipTypeUrl+id);
  }
  deleteCourse(id){
    return this._http.delete(this.courseUrl+id);
  }
  deleteProfile(id){
    return this._http.delete(this.jobProfileUrl+id);
  }
  deleteLocation(id){
    return this._http.delete(this.locationUrl+id);
  }
  
}

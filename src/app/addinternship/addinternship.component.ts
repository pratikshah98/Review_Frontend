import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { intenrship_class } from '../classes/intenrship';

@Component({
  selector: 'app-addinternship',
  templateUrl: './addinternship.component.html',
  styleUrls: ['./addinternship.component.css']
})
export class AddinternshipComponent implements OnInit {
  internship_id:number;
  
  ctc:number;
  start_date:Date;
  stipend:number;
  company_id:number;
  faculty_id:number;
  internship_type_id:number;
  job_profile_id:number;
  location_id:number=4;
  student_id:number; 
  approved_status:number;
jobprofile_arr:[]=[];
faculty_arr:[]=[];
location_arr:[]=[];
company_arr:[]=[];
internshiptype_arr:[]=[];
choice:string;
  constructor(private _route:Router,private _adminService:AdminService) { }
  onclickAdd()
  {
    this.approved_status=1;
    this._adminService.addInternship(new intenrship_class(this.approved_status,this.ctc,this.start_date,this.stipend,this.internship_type_id,this.job_profile_id,this.location_id,this.student_id,this.company_id,this.faculty_id)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('Student Added suceessfully..');
          this._route.navigate(['menu/internship']);
        
        
    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/internship']);
  }
  ngOnInit(): void {
    this._adminService.getAllJobProfile().subscribe(
      (data:any)=>{
        console.log(data);
        this.jobprofile_arr=data;
      });

      this._adminService.getAllFaculty().subscribe(
        (data:any)=>{
          console.log(data);
          this.faculty_arr=data;
        });

      this._adminService.getAllLocation().subscribe(
        (data:any)=>{
          console.log(data);
          this.location_arr=data;
        });

        this._adminService.getAllCompany().subscribe(
        (data:any)=>{
          console.log(data);
          this.company_arr=data;
        });

        this._adminService.getAllInternshipType().subscribe(
          (data:any)=>{
            console.log(data);
            this.internshiptype_arr=data;
          });
        
  }
  selectChangeHandler(){

  }
  onChoiceChange(){}
}

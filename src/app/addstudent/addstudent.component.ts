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
import { student_class } from '../classes/studentClass';
import { courseClass } from '../classes/course';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  student_id:number;
  student_email:string;
  student_contact_no:string;
  student_name:string;
  course_id:number;
student_password:string;  
course_arr:courseClass[]=[];
  constructor(private _route:Router,private _adminService:AdminService) { }
  onclickAdd()
  {
    this._adminService.addStudent(new student_class(this.student_id,this.student_email,this.student_contact_no,this.student_name,this.course_id,this.student_password)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('Student Added suceessfully..');
          this._route.navigate(['menu/student']);
        
        
    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/student']);
  }
  selectChangeHandler()
  {
    //this.course_id=event.target.value;

    console.log(this.course_id);
  }
  ngOnInit(): void {
    this._adminService.getAllCourse().subscribe(
      (data:any)=>{
        console.log(data);
        this.course_arr=data;
      })
  }

}

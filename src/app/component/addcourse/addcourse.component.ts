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
import { courseClass } from 'src/app/classes/course';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course_name:string;
  course_duration:number;
course_strength:number;

  constructor(private _route:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
  }
  onclickAdd()
  {
    this._adminService.addCourse(new courseClass(this.course_duration,this.course_name,this.course_strength)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
        console.log(data);
          alert('Course Added suceessfully..');
          this._route.navigate(['menu/course']);


    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/course']);
  }
}

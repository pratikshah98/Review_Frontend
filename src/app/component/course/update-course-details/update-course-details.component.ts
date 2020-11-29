import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courseClass } from 'src/app/classes/course';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-course-details',
  templateUrl: './update-course-details.component.html',
  styleUrls: ['./update-course-details.component.css']
})
export class UpdateCourseDetailsComponent implements OnInit {
  Course_Strength:number;
  Course_Duration:number;
  Course_Id:number;
  Course_Name:string;
  constructor(private _avr:ActivatedRoute,private _adminser:AdminService,private _route:Router) { }

  ngOnInit(): void {
    this.Course_Id=this._avr.snapshot.params['id'];
    this._adminser.getCourseById(this.Course_Id).subscribe((data:any)=>{
      this.Course_Name=data[0]["course_name"];
      this.Course_Duration=data[0]["course_duration"];
      this.Course_Strength=data[0]["course_strength"];
    })
  }
  onclickCancle(){
    this._route.navigate(['menu/course']);
  }
  onclickSave(){
    if(this.Course_Name.length<=1 || this.Course_Duration<=0 || this.Course_Strength<=0){
      alert("Please Fill the details Correctly");
    }
    else{
      this._adminser.updateCourse(this.Course_Id,new courseClass(this.Course_Duration,this.Course_Name,this.Course_Strength,this.Course_Id)).subscribe((data:any)=>{
        this._route.navigate(['menu/course']);
      },(err:any)=>{
        alert("There is Error in Server");
      })
    }
  }

}

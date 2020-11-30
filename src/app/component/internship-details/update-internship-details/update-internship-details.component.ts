import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { intenrship_class } from 'src/app/classes/intenrship';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-internship-details',
  templateUrl: './update-internship-details.component.html',
  styleUrls: ['./update-internship-details.component.css']
})
export class UpdateInternshipDetailsComponent implements OnInit {
  internship_id:number;
  added_on:Date;
  ctc:number;
  start_date:Date;
  stipend:number;
  company_id:number;
  faculty_id:number;
  internship_type_id:number;
  job_profile_id:number;
  location_id:number;
  student_id:number;
  constructor(private _avr:ActivatedRoute,private _router:Router,private _adminser:AdminService) { }

  ngOnInit(): void {
    this.internship_id=this._avr.snapshot.params['id'];
    this._adminser.getInternshipById(this.internship_id).subscribe((data:any)=>{
      this.added_on=data[0]["added_on"];
      this.ctc=data[0]["ctc"];
      this.start_date=data[0]["start_date"];
      this.stipend=data[0]["stipend"];
      this.company_id=data[0]["company_id"];
      this.faculty_id=data[0]["faculty_id"];
      this.internship_type_id=data[0]["internship_type_id"];
      this.job_profile_id=data[0]["job_profile_id"];
      this.location_id=data[0]["location_id"];
      this.student_id=data[0]["student_id"];
    });
  }
  onclickCancle(){
    this._router.navigate(['menu/internship']);
  }
  onclickSave(){
      this._adminser.updateIntenship(this.internship_id,new intenrship_class(this.added_on,this.ctc,this.start_date,this.stipend,this.company_id,this.faculty_id,this.internship_type_id,this.job_profile_id,this.location_id,this.student_id)).subscribe((data:any)=>{
        this._router.navigate(['menu/internship']);
      }) 
  }
}

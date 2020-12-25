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
  approved_status:number;
  jobprofile_arr:[]=[];
  faculty_arr:[]=[];
  location_arr:[]=[];
  company_arr:[]=[];
  internshiptype_arr:[]=[];
  choice:string;
  flag:number=0;
  constructor(private _avr:ActivatedRoute,private _router:Router,private _adminService:AdminService) { }

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
        
    this.internship_id=this._avr.snapshot.params['id'];
    this._adminService.getInternshipById(this.internship_id).subscribe((data:any)=>{
      console.log(data);
      this.added_on=data[0]["added_on"];
      this.ctc=data[0]["ctc"];
      this.start_date=new Date(data[0]["start_date"]);
      console.log(this.start_date);
      this.stipend=data[0]["stipend"];
      this.company_id=data[0]["company_id"];
      this.faculty_id=data[0]["faculty_id"];
      if(this.faculty_id==null)
      {
        this.choice='Off-campus';
      }
      else
      {
        this.choice='On-campus';
      }
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
     
      this.approved_status=1;
      this._adminService.updateIntenship(this.internship_id,new intenrship_class(this.approved_status,this.ctc,this.start_date,this.stipend,this.internship_type_id,this.job_profile_id,this.location_id,this.student_id,this.company_id,this.faculty_id)).subscribe(
      (data:any)=>{
        
       
        console.log(data);
          alert('Internship Updated suceessfully..');
          this._router.navigate(['menu/internship']);
        
        
    }
    );
  }
  selectChangeHandler(){}
  onChoiceChange(){}
 
}

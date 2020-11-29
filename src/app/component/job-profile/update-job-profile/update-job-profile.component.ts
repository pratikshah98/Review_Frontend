import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jobProfileClass } from 'src/app/classes/jobProfile';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-job-profile',
  templateUrl: './update-job-profile.component.html',
  styleUrls: ['./update-job-profile.component.css']
})
export class UpdateJobProfileComponent implements OnInit {
 
  Profile_Name:string;
  Profile_id:number;
  constructor(private _avr:ActivatedRoute,private _router:Router,private _adminser:AdminService) { }

  ngOnInit(): void {
    this.Profile_id=this._avr.snapshot.params['id'];
    console.log(this.Profile_id);
    this._adminser.getProfileById(this.Profile_id).subscribe((data:any)=>{
      this.Profile_Name=data[0]["job_profile_name"];
    });
    
  }
  onclickCancle(){
    this._router.navigate(['menu/jobprofile']);
  }
  onclickSave(){
    if(this.Profile_Name.length<=1){
      alert("Fill the details correctly");
    }
    else{
      this._adminser.updateProfile(this.Profile_id,new jobProfileClass(this.Profile_Name)).subscribe((data:any)=>{
        this._router.navigate(['menu/jobprofile']);
      })
    }
    
  }
}

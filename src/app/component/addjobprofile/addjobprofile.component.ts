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
import { jobProfileClass } from 'src/app/classes/jobProfile';

@Component({
  selector: 'app-addjobprofile',
  templateUrl: './addjobprofile.component.html',
  styleUrls: ['./addjobprofile.component.css']
})
export class AddjobprofileComponent implements OnInit {
job_profile_name:string;
  constructor(private _route:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
  }
  onclickAdd()
  {
    this._adminService.addJobProfile(new jobProfileClass(this.job_profile_name)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('Jobprofile Added Suceessfully..');
          this._route.navigate(['menu/jobprofile']);
        
        
    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/location']);
  }

}

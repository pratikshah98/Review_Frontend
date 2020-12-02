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
import { internshipTypeClass } from 'src/app/classes/internshipType';

@Component({
  selector: 'app-addinternshiptype',
  templateUrl: './addinternshiptype.component.html',
  styleUrls: ['./addinternshiptype.component.css']
})
export class AddinternshiptypeComponent implements OnInit {
internship_type_duration:number;
internship_type_name:string;
  constructor(private _route:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
  }
  onclickAdd()
  {
    this._adminService.addInternshipType(new internshipTypeClass(this.internship_type_duration,this.internship_type_name)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('internshipType Added suceessfully..');
          this._route.navigate(['menu/internshipType']);
        
        
    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/internshipType']);
  }

}

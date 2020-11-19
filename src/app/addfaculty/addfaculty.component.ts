import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { facultyClass } from '../classes/faculty';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {
 faculty_contact_number:string;
 faculty_email_id:string;
 faculty_name:string;


  constructor(private _route:Router,private _adminService:AdminService) { }
  onclickAdd()
  {
    this._adminService.addFaculty(new facultyClass(this.faculty_contact_number,this.faculty_email_id,this.faculty_name)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('Faculty Added suceessfully..');
          this._route.navigate(['menu/faculty']);
        
        
    }
    );

  }
  onclickCancle(){
    this._route.navigate(['menu/faculty']);
  }

  ngOnInit(): void {
  }

}

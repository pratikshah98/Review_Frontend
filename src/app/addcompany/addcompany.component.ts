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
import { companyClass } from '../classes/company';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  
company_name:string;
company_url:string;
  constructor(private _route:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
  }
  onclickAdd()
  {
    this._adminService.addCompany(new companyClass(this.company_name,this.company_url)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('company Added suceessfully..');
          this._route.navigate(['menu/company']);
        
        
    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/company']);
  }
}

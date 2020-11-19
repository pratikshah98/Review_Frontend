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
import { SelectorMatcher } from '@angular/compiler';
import { locationClass } from 'src/app/classes/location';
@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  location_name:string;
 location_arr:Location[]=[];
  constructor(private _route:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
  }
  onclickAdd()
  {
    this._adminService.addLocation(new locationClass(this.location_name)).subscribe(
      (data:any)=>{
        //this.location_arr.push()
       
        console.log(data);
          alert('Location suceessfully..');
          this._route.navigate(['menu/location']);
        
        
    }
    );
  }
  onclickCancle(){
    this._route.navigate(['menu/location']);
  }

}

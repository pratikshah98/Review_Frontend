import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { internshipTypeClass } from 'src/app/classes/internshipType';
import { AdminService } from 'src/app/service/admin.service';
import { intenrship_class } from 'src/app/classes/intenrship';
@Component({
  selector: 'app-update-internship-type',
  templateUrl: './update-internship-type.component.html',
  styleUrls: ['./update-internship-type.component.css']
})
export class UpdateInternshipTypeComponent implements OnInit {

  internship_type_name:string;
  internship_type_id:number;
  internship_type_duration:number;
  constructor(private _avr:ActivatedRoute,private _router:Router,private _adminser:AdminService) { }

  ngOnInit(): void {
    this.internship_type_id=this._avr.snapshot.params['id'];
    console.log(this.internship_type_id);
    this._adminser.getInternshipTypeById(this.internship_type_id).subscribe((data:any)=>{
      this.internship_type_name=data[0]["internship_type_name"];
      this.internship_type_duration=data[0]["internship_type_duration"];
    });
  }
  onclickCancle(){
    this._router.navigate(['menu/internshipType']);
  }
  onclickSave(){
    if(this.internship_type_name.length<=1){
      alert("Fill the details correctly");
    }
    else{
      this._adminser.updateIntenshipType(this.internship_type_id,new internshipTypeClass(this.internship_type_duration,this.internship_type_name)).subscribe((data:any)=>{
        this._router.navigate(['menu/internshipType']);
      })
    }
    
  }
}

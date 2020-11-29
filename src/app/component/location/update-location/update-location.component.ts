import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { locationClass } from 'src/app/classes/location';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {
location_id:number;
Location_Name:string;
  constructor(private _route:Router,private _avr:ActivatedRoute,private _adminser:AdminService) { }

  ngOnInit(): void {
    this.location_id=this._avr.snapshot.params['id'];
    this._adminser.getLocationById(this.location_id).subscribe((data:any)=>{
      this.Location_Name=data[0]["location_name"];
    });
  }
  onclickCancle(){
    this._route.navigate(['menu/location']);
  }
  onclickSave(){
    if(this.Location_Name.length<=1){
      alert("Fill the Details Correctly");
    }
    else{
      this._adminser.updateLocation(this.location_id,new locationClass(this.Location_Name)).subscribe((data:any)=>{
        this._route.navigate(['menu/location']);
      })
    }
  }
}

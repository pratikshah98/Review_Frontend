import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { companyClass } from 'src/app/classes/company';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-company-details',
  templateUrl: './update-company-details.component.html',
  styleUrls: ['./update-company-details.component.css']
})
export class UpdateCompanyDetailsComponent implements OnInit {

  constructor(private _avr:ActivatedRoute,private _adminser:AdminService,private _route:Router) { }
  id:number;
  Company_Name:string="";
  Company_Url:string="";
  ngOnInit(): void {
    this.id=this._avr.snapshot.params['id'];
    console.log(this.id);
    this._adminser.getCompanyById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.Company_Name=data[0]['company_name'];
      this.Company_Url=data[0]['company_url'];
    })
  }
  onclickCancle(){
    this._route.navigate(['menu/company']);
  }
  onclickSave(){
    console.log("hello");
    if(this.Company_Name.length<=1 || this.Company_Url.length<=1){
      alert("Please Fill the details");
    }
    else{
      this._adminser.updateCompany(this.id,new companyClass(this.Company_Name,this.Company_Url)).subscribe((data:any)=>{
          this._route.navigate(['menu/company']);
      });
    }
  }


}

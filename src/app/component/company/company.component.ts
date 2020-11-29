import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { companyClass } from "../../classes/company";
import { combineAll } from 'rxjs/operators';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  companyDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  company_arr:  companyClass[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['company_name','company_url','Action'];

  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllCompany().subscribe((data:any)=>{
      this.companyDataSource.paginator = this.paginator;
      this.companyDataSource.sort = this.sort;
      this.company_arr=data;
      this.companyDataSource.data=this.company_arr;
      console.log(data);
    });
  }
  onAddCompany()
  {
    this.route.navigate(['menu/addcompany']);
  }
  applyFilter(filterValue: string) {
    this.companyDataSource.filter = filterValue.trim().toLowerCase();
    if(this.companyDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }

  }
  OnEdit(company_id){
    console.log(company_id);
    this.route.navigate(['menu/updatecompany',company_id]);
  }
  Selected_delete()
  {

  }

}

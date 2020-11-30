import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { internshipTypeClass } from "../../classes/internshipType";
@Component({
  selector: 'app-internship-type',
  templateUrl: './internship-type.component.html',
  styleUrls: ['./internship-type.component.css']
})
export class InternshipTypeComponent implements OnInit {

  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  internshipTypeDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  internshipType_arr:  internshipTypeClass[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['internship_type_name','internship_type_duration','Action'];


  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllInternshipType().subscribe((data:any)=>{
      this.internshipTypeDataSource.paginator = this.paginator;
      this.internshipTypeDataSource.sort = this.sort;
      this.internshipType_arr=data;
      this.internshipTypeDataSource.data=this.internshipType_arr;
      console.log(data);
    });
  }
  onAddIntenshipType()
  {
    this.route.navigate(['menu/addlocation']);
  }
  applyFilter(filterValue: string) {
    this.internshipTypeDataSource.filter = filterValue.trim().toLowerCase();
    if(this.internshipTypeDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onEdit(intenshipType_id){
    this.route.navigate(['menu/updateintenshiptype',intenshipType_id])
  }
  onDelete(item){
    this.adminService.deleteInternshiptype(item.internship_type_id).subscribe((data:any)=>{
      this.internshipType_arr.splice(this.internshipType_arr.indexOf(item),1);
      this.internshipTypeDataSource.data=this.internshipType_arr;
    })
  }

}

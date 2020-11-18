import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { facultyClass } from "../../classes/faculty";
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  facultyDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  faculty_tbl_arr:  facultyClass[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['faculty_contact_number','faculty_email_id','faculty_name','Action'];
  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllFaculty().subscribe((data:any)=>{
      this.facultyDataSource.paginator = this.paginator;
      this.facultyDataSource.sort = this.sort;
      this.faculty_tbl_arr=data;
      this.facultyDataSource.data=this.faculty_tbl_arr;
      console.log(data);
    });
  }
  onAddFaculty()
  {
    this.route.navigate(['menu/addfaculty']);
  }
  applyFilter(filterValue: string) {
    this.facultyDataSource.filter = filterValue.trim().toLowerCase();
    if(this.facultyDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }

  }
  Selected_delete()
  {

  }
}

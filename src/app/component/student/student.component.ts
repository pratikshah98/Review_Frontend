import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { student_class } from "../../classes/studentClass";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  studnetDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  student_arr:  student_class[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['student_email','student_contact_no','student_name'];
  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllStudent().subscribe((data:any)=>{
      this.studnetDataSource.paginator = this.paginator;
      this.studnetDataSource.sort = this.sort;
      this.student_arr=data;
      this.studnetDataSource.data=this.student_arr;
      console.log(data);
    });
  }
  onAddstudent()
  {
    this.route.navigate(['menu/addstudent']);
  }
  applyFilter(filterValue: string) {
    this.studnetDataSource.filter = filterValue.trim().toLowerCase();
    if(this.studnetDataSource.filteredData.length==0)
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

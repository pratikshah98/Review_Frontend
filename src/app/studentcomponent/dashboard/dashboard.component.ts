import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from "../../service/admin.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Exam_name','Total_marks','obtained_marks','percent','date'];
  dataSource=new MatTableDataSource();
  totalInternship:number;
  totalCompany:number;
  totalReview:number;
  totalStudent:number;
  constructor(private adminService:AdminService) { }
  
  ngOnInit(): void {
    this.adminService.getCountByInternship().subscribe((data:any)=>{
      this.totalInternship=data[0].internshipcnt;
    });
    this.adminService.getCountByCompany().subscribe((data:any)=>{
      this.totalCompany=data[0].companycnt;
    });
    this.adminService.getCountByReview().subscribe((data:any)=>{
      this.totalReview=data[0].reviewcnt;
    });
    this.adminService.getCountByStudent().subscribe((data:any)=>{
      this.totalStudent=data[0].studentcnt;
    });
  }

}

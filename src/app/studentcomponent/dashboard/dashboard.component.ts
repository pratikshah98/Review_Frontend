import { StudentService } from 'src/app/service/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { animation } from '@angular/animations';
//import { Chart } from 'chart.js';
import { AdminService } from "../../service/admin.service";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { companyClass } from "../../classes/company";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['company_name', 'company_url'];
  dataSource=new MatTableDataSource();
  totalInternship:number;
  totalCompany:number;
  totalReview:number;
  totalStudent:number;
  email:string;


  companyDataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  company_arr: companyClass[] = [];

  course_duration:any;
  course_name:string;
  student_contact_no:string;
  student_id:any;
  student_name:string;
  student_password:string;
  course_strength:any;
  constructor(private adminService:AdminService,private studentService:StudentService) {

    this.email=localStorage.getItem('email');
  }


  ngOnInit(): void {
       this.studentService.getStudentById(this.email).subscribe((data:any)=>{

      this.course_duration=data[0].course_duration
      this.course_name=data[0].course_name;
      this.student_contact_no=data[0].student_contact_no;
      this.student_id=data[0].student_id;
      this.student_name=data[0]. student_name;
      this.student_password=data[0].course_duration;
      this.course_strength=data[0].course_strength
    })

    this.adminService.getAllCompany().subscribe((data: any) => {
      this.companyDataSource.paginator = this.paginator;
      this.companyDataSource.sort = this.sort;
      this.company_arr = data;
      this.companyDataSource.data = this.company_arr;
      console.log(data);
    });



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

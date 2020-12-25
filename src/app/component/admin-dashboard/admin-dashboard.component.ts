import { Component, OnInit, ViewChild } from '@angular/core';
import { animation } from '@angular/animations';
import { Chart } from 'chart.js';
import { AdminService } from "../../service/admin.service";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { companyClass } from "../../classes/company";
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  exam_displayedColumns: string[] = ["Exam_name",
    "Batch_name",
    "Marks",
    "Time"
  ];

  LineChart = [];
  BarChart = [];
  BarChart1 = [];
  PieChart = [];
  myPieChart = [];

  totalInternship: number;
  totalCompany: number;
  totalReview: number;
  totalStudent: number;
  flag: boolean;
  currentdialog: MatDialogRef<any> = null;
  companyDataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  company_arr: companyClass[] = [];


  displayedColumns: string[] = ['company_name', 'company_url'];
  constructor(private route: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.flag = true;
    this.adminService.getAllCompany().subscribe((data: any) => {
      this.companyDataSource.paginator = this.paginator;
      this.companyDataSource.sort = this.sort;
      this.company_arr = data;
      this.companyDataSource.data = this.company_arr;
      console.log(data);
    });
    this.adminService.getCountByInternship().subscribe((data: any) => {
      console.log(data[0].internshipcnt);
      this.totalInternship = data[0].internshipcnt;
    });
    this.adminService.getCountByCompany().subscribe((data: any) => {
      this.totalCompany = data[0].companycnt;
    });
    this.adminService.getCountByReview().subscribe((data: any) => {
      this.totalReview = data[0].reviewcnt;
    });
    this.adminService.getCountByStudent().subscribe((data: any) => {
      this.totalStudent = data[0].studentcnt;
    
    });
  } 
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { animation } from '@angular/animations';
import { Chart } from 'chart.js';
import { AdminService } from "../../service/admin.service";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  exam_displayedColumns: string[] = [    "Exam_name",
  "Batch_name",
  "Marks",
  "Time"
];
trans_displayedColumns: string[] = ['Transaction_id','Name','Phone_no', 'Batch_name','Paid_amount','Date'];
LineChart = [];
  BarChart = [];
  BarChart1 = [];
  PieChart=[];
  myPieChart=[];

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

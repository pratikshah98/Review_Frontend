import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { animation } from '@angular/animations';
import { Chart } from 'chart.js';
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

  constructor() { }

  ngOnInit(): void {
  }

}

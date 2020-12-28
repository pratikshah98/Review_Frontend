import { Component, OnInit, ViewChild } from '@angular/core';
import { animation } from '@angular/animations';import { Chart } from 'chart.js';
import { AdminService } from "../../service/admin.service";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { companyClass } from "../../classes/company";
import { combineAll } from 'rxjs/operators';
import { StudentService } from 'src/app/service/student.service';
import { timer } from "rxjs";

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
  pie_data:number[]=[0,0,0];
  postsSubscription:any;
  timespan:any;
i:number;
lebel_data:string[]=[];
course_name:string[]=[];
bar_studentdata:number[]=[];
lineChart:number[]=[];
  displayedColumns: string[] = ['company_name', 'company_url'];
  constructor(private student_service:StudentService,private route: Router, private adminService: AdminService) { }

  ngOnInit(): void {

     this.student_service.pichartData().subscribe((pidata:any)=>{

      // console.log(pidata);

       for(this.i=0;this.i<pidata.length;this.i++)
       {
         console.log(pidata[this.i].city);
        this.lebel_data[this.i]=pidata[this.i].city;
         this.pie_data[this.i]=pidata[this.i].cnt;

       }


     });


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

    this.refreshData();

  }

  private subscribeToData(): void {
    this.timespan = timer(10000)
    .subscribe(() => this.refreshData());
  }

  private refreshData(): void {

    this.subscribeToData();
this.student_service.lineChartData().subscribe((data:any)=>{

  for(let y=0;y<data.length;y++)
  {
    this.lineChart.push((data[y].student*100)/data.length);
  }


})

    this.LineChart = new Chart('linechart', {
      type: 'line',
      data: {
        labels: ["2018", "2019","2020","2021"],
        datasets: [{
          label: "Total internship Per Year",
          data: this.lineChart,
          fill: true,
          lineTension: 0.2,
          borderColor: "white",
          //backgroundColor:"blue",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],




          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        animations:
        {
          animationScale:true
        }
      }
    });


    this.student_service.barchatData().subscribe((data:any)=>{

      console.log(data);
      this.course_name=[];
      this.bar_studentdata=[];
      for(let y=0;y<data.length;y++)
      {
        this.course_name.push(data[y].Course);
        this.bar_studentdata.push((data[y].student*100)/data.length);
      }


      this.BarChart = new Chart('barchart', {
        type: 'bar',
        data: {
          labels: this.course_name,
          datasets: [{
            label: "Review Course wise(%)",
            data: this.bar_studentdata,
            fill: true,
            lineTension:5,
            borderColor: "white",
            //backgroundColor:"blue",
            borderWidth: 1
          }],
        },



        options: {
          title: {
            text: "Bar Chart",
            display: true,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {

                beginAtZero: true
              }
            }]
          },
          animations:
          {
            animationScale:true
          }
        }
        }

    );
      });


    console.log(this.lebel_data)

      this.PieChart = new Chart('piechart', {
        type: 'pie',
        data: {
          labels: ["Top 1","Top 2","Top 3"],
          datasets: [{
            label: "",
            backgroundColor:["rgb(230,149,13)","rgb(252,2,128)","rgb(200,2,100)"],

            data: this.pie_data,
            fill: true,
            lineTension: 0.2,
            borderColor: "white",
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "Pie Chart",
            display: true,
          },
          legend: {
            display: true,
            fullWidth: true,
            labels: {
              fontSize: 20,
              fontColor: 'black',
            }
          },
          animations:
          {
            animationScale:true
          }
        },

      });

    }



}

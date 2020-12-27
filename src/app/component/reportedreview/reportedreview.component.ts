import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { StudentService } from "../../service/student.service";
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { review_class } from "../../classes/review";
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-reportedreview',
  templateUrl: './reportedreview.component.html',
  styleUrls: ['./reportedreview.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ReportedreviewComponent implements OnInit {

  flag:boolean;
  dataSource=new MatTableDataSource();
  columnsToDisplay = ['student_name', 'review_title', 'student_contact_no', 'student_email'];
  expandedElement: review_class | null;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  
  constructor(private route:Router,private studentService:StudentService,private adminService:AdminService) { }

  ngOnInit(): void {
    this.flag=true;    
    this.adminService.getRepotedReview().subscribe(
      (data:any)=>{
        
        console.log(data);
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  onAddReview()
  {
    this.route.navigate(['menu/addreview']);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  
  onReportDisapproved(review_id){
    let admin=localStorage.getItem("email");
    this.adminService.updateReportStatus(review_id,admin).subscribe((data:any)=>{
      alert("Status Updated Successfully.");
      console.log(data);
      this.ngOnInit();
    })
  }

}

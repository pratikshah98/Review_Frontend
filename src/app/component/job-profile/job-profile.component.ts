import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { jobProfileClass } from "../../classes/jobProfile";
@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  jobProfileDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  jobProfile_arr:  jobProfileClass[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['job_profile_id','job_profile_name','Action'];
 
  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllJobProfile().subscribe((data:any)=>{
      this.jobProfileDataSource.paginator = this.paginator;
      this.jobProfileDataSource.sort = this.sort;
      this.jobProfile_arr=data;
      this.jobProfileDataSource.data=this.jobProfile_arr;
      console.log(data);
    });
  }
  onAddJobProfile()
  {
    this.route.navigate(['menu/addjobprofile']);
  }
  applyFilter(filterValue: string) {
    this.jobProfileDataSource.filter = filterValue.trim().toLowerCase();
    if(this.jobProfileDataSource.filteredData.length==0)
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

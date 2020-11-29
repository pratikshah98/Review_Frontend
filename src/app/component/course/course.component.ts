import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { courseClass } from "../../classes/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  courseDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  course_arr:  courseClass[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['course_id','course_duration','course_name','course_strength','Action'];

  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllCourse().subscribe((data:any)=>{
      this.courseDataSource.paginator = this.paginator;
      this.courseDataSource.sort = this.sort;
      this.course_arr=data;
      this.courseDataSource.data=this.course_arr;
      console.log(data);
    });
  }
  onAddCourse()
  {
    this.route.navigate(['menu/addcourse']);
  }
  applyFilter(filterValue: string) {
    this.courseDataSource.filter = filterValue.trim().toLowerCase();
    if(this.courseDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }

  }
  onDelete(item){
    this.adminService.deleteCourse(item.course_id).subscribe((data:any)=>{
      alert("Course is deleted");
      this.course_arr.splice(this.course_arr.indexOf(item),1);
      
      this.courseDataSource.data=this.course_arr;
    },(err:any)=>{
      alert("Error in server");
    })
  }
  onEdit(course_id){
    this.route.navigate(['menu/Updatecourse',course_id]);
  }
  Selected_delete()
  {

  }

}

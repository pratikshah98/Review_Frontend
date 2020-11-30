import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { review_class } from "../../classes/review";
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  reviewDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  review_arr:  review_class[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['review_title','review_description','cons','pros','rating','Action'];

  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllReview().subscribe((data:any)=>{
      this.reviewDataSource.paginator = this.paginator;
      this.reviewDataSource.sort = this.sort;
      this.review_arr=data;
      this.reviewDataSource.data=this.review_arr;
      console.log(data);
    });
  }
  onAddReview()
  {
    this.route.navigate(['menu/addlocation']);
  }
  applyFilter(filterValue: string) {
    this.reviewDataSource.filter = filterValue.trim().toLowerCase();
    if(this.reviewDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onEdit(review_id){
     this.route.navigate(['menu/updatereview',review_id])
  }
  // onDelete(item){
  //   this.adminService.deleteLocation(item.location_id).subscribe((data:any)=>{
  //     this.location_arr.splice(this.location_arr.indexOf(item),1);
  //     this.locationDataSource.data=this.location_arr;
  //   })
  // }
}

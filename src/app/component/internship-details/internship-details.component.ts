import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { intenrship_class } from "../../classes/intenrship";
@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.css']
})
export class InternshipDetailsComponent implements OnInit {
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  intenrshipDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  internship_arr:  intenrship_class[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['added_on','ctc','start_date','stipend','Action'];

  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllInternship().subscribe((data:any)=>{
      this.intenrshipDataSource.paginator = this.paginator;
      this.intenrshipDataSource.sort = this.sort;
      this.internship_arr=data;
      this.intenrshipDataSource.data=this.internship_arr;
      console.log(data);
    });
  }
  onAddInternship()
  {
    this.route.navigate(['menu/addinternship']);
  }
  applyFilter(filterValue: string) {
    this.intenrshipDataSource.filter = filterValue.trim().toLowerCase();
    if(this.intenrshipDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onEdit(internship_id){
     this.route.navigate(['menu/updateintenshipdetail',internship_id])
  }
  onDelete(item){
    // this.adminService.deleteLocation(item.location_id).subscribe((data:any)=>{
    //   this.location_arr.splice(this.location_arr.indexOf(item),1);
    //   this.locationDataSource.data=this.location_arr;
    // })
  }
}

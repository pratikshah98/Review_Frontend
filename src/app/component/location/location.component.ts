import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from "../../service/admin.service";
import { locationClass } from "../../classes/location";
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  flag:boolean;
  currentdialog:MatDialogRef<any>=null;
  locationDataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  location_arr:  locationClass[]= [];
  constructor(private route:Router,private adminService:AdminService) { }
  displayedColumns: string[] = ['location_id','location_name','Action'];

  ngOnInit(): void {
    this.flag=true;
    this.adminService.getAllLocation().subscribe((data:any)=>{
      this.locationDataSource.paginator = this.paginator;
      this.locationDataSource.sort = this.sort;
      this.location_arr=data;
      this.locationDataSource.data=this.location_arr;
      console.log(data);
    });
  }
  onAddLocation()
  {
    this.route.navigate(['menu/addlocation']);
  }
  applyFilter(filterValue: string) {
    this.locationDataSource.filter = filterValue.trim().toLowerCase();
    if(this.locationDataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }

  }
  onEdit(location_id){
    this.route.navigate(['menu/updatelocation',location_id])
  }
  onDelete(item){
    this.adminService.deleteLocation(item.location_id).subscribe((data:any)=>{
      this.location_arr.splice(this.location_arr.indexOf(item),1);
      this.locationDataSource.data=this.location_arr;
    })
  }
  Selected_delete()
  {

  }

}

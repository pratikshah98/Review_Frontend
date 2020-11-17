import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  currentdialog:MatDialogRef<any>=null;
  Subject_dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  constructor(private matDialog:MatDialog,private _ac:ActivatedRoute,private route:Router) { }
  displayedColumns: string[] = ['First_Name','Last_Name','Url','Action'];
  ngOnInit(): void {
  }
  onAddCompany()
  {
    this.route.navigate(['menu/addcompany']);
  }

}

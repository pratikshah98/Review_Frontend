import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.css']
})
export class InternshipDetailsComponent implements OnInit {
  currentdialog:MatDialogRef<any>=null;
  Subject_dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  constructor(private matDialog:MatDialog,private _ac:ActivatedRoute,private route:Router) { }
  displayedColumns: string[] = ['Date','Status','Start_date','Job_profile','Action'];
  ngOnInit(): void {
  }
  onAddInternship()
  {
    this.route.navigate(['menu/addinternship']);
  }

}

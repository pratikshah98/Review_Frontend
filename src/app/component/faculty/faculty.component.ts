import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  currentdialog:MatDialogRef<any>=null;
  Subject_dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  constructor(private matDialog:MatDialog,private _ac:ActivatedRoute,private route:Router) { }
  displayedColumns: string[] = ['contact_no','Email_id','Name','Course_name','Action'];
  ngOnInit(): void {
  }
  onAddFaculty()
  {
    this.route.navigate(['menu/addfaculty']);
  }

}

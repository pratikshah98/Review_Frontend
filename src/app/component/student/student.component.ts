import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  currentdialog:MatDialogRef<any>=null;
  Subject_dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  constructor(private matDialog:MatDialog,private _ac:ActivatedRoute,private route:Router) { }
  displayedColumns: string[] = ['contact_no','Name','Course_name','Action'];
  ngOnInit(): void {
  }
  onAddStudent()
  {
    this.route.navigate(['menu/addstudent']);
  }

}

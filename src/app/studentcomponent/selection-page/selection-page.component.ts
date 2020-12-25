import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { adminLoginClass } from 'src/app/classes/adminLogin';
import { intenrship_class } from 'src/app/classes/intenrship';
import { review_class } from 'src/app/classes/review';
import { AdminService } from 'src/app/service/admin.service';
import { StudentService } from 'src/app/service/student.service';

class internShip_StudentData {
  constructor(
    public internship_type_name: string,
    public job_profile_name: string,
    public stipend: number,
    public ctc: number,
    public location_name: string,
    public start_date: Date,
    public internship_type_duration: number,
    public internship_id:number
  ) {}
}
@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.css'],
})
export class SelectionPageComponent implements OnInit {
  selectionInternship: any[];
  student_email: string;
  student_name: string;
  student_id: any;
  flag: boolean;
  intern_studentData: internShip_StudentData[] = [];
  constructor(
    private _route: Router,
    private _adminService: AdminService,
    private _studentService: StudentService
  ) {
    this.student_email = localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.flag=true;
    this._studentService
      .getStudentById(this.student_email)
      .subscribe((data: any) => {
        console.log('hello');
        console.log(data);
        this.student_id = data[0].student_id;

        this._studentService
          .getIntenShipByStudentId(this.student_id)
          .subscribe((interndata: any) => {
            if (interndata.length == 0) {
              this.flag = true;
            } else {
              console.log(interndata);
              this.intern_studentData = interndata;
              this.flag=false;
            }
          });
      });
  }
  onclickAdd(id) {
    this._route.navigate(['studentmenu/writeReview/'+id]);
  }
}

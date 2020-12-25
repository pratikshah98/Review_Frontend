import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { adminLoginClass } from 'src/app/classes/adminLogin';
import { intenrship_class } from 'src/app/classes/intenrship';
import { review_class } from 'src/app/classes/review';
import { AdminService } from 'src/app/service/admin.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {
  review_id:number;
  review_status:number=1;
  cons:string;
  pros:string;
  rating:number;
  review_date:Date;
  review_description:string;
  review_title:string;
  internship_id:number;
  admin_id:string;
  admin_arr:adminLoginClass[]=[];
  internship_arr:intenrship_class[]=[];
  student_email:string;
  student_name:string;
  constructor(private _route:Router,private _adminService:AdminService,private _studentService:StudentService,private act_router:ActivatedRoute) {

    this.student_email=localStorage.getItem('email');

   }

  ngOnInit(): void {

    this.internship_id = this.act_router.snapshot.params["id"];

    this._adminService.getAllAdmin().subscribe(
      (data:any)=>{
        console.log(data);
        this.admin_arr=data;
    //    this.admin_id=data[0].admin_email;
      })
      this._adminService.getAllInternship().subscribe(
        (data:any)=>{
          console.log(data);
          this.internship_arr=data;
      //    this.admin_id=data[0].admin_email;
        })
        this._studentService.getStudentById(this.student_email).subscribe(
          (data:any)=>{
            console.log("hello");
            console.log(data);
            this.student_name=data[0].student_name;
            console.log(this.student_name);
        //    this.admin_id=data[0].admin_email;
          })

  }
  onclickAdd()
  {
    this.admin_id="purvang1611@gmail.com";
    this._studentService.addReview(new review_class(this.cons,this.pros,this.rating,this.review_description,this.review_title,this.internship_id,this.admin_id,this.review_status)).subscribe(
      (data:any)=>{
        //this.location_arr.push()

        console.log(data);
          alert('Review Added suceessfully..');
          this._route.navigate(['studentmenu/readReview']);


    }
    );
  }
  onclickCancel(){
    this._route.navigate(['studentmenu/readReview']);
  }

  selectChangeHandler()
  {
    //this.course_id=event.target.value;

    console.log(this.admin_id);
  }
  addform(f){}

}

import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../service/student.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-review',
  templateUrl: './read-review.component.html',
  styleUrls: ['./read-review.component.css']
})
export class ReadReviewComponent implements OnInit {
  reviews:any[];
  constructor(private route:Router,private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllReview().subscribe(
      (data:any)=>{
        this.reviews=data;
      }
    );
  }

}

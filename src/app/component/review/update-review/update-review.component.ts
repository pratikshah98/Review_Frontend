import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { review_class } from 'src/app/classes/review';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
  review_id:number;
  cons:string;
  pros:string;
  rating:number;
  review_date:Date;
  review_description:string;
  review_title:string;
  internshipId:number;
  constructor(private _avr:ActivatedRoute,private _router:Router,private _adminser:AdminService) { }

  ngOnInit(): void {
    this.review_id=this._avr.snapshot.params['id'];
    this._adminser.getReviewById(this.review_id).subscribe((data:any)=>{
      this.cons=data[0]["cons"];
      this.pros=data[0]["pros"];
      this.rating=data[0]["rating"];
      this.review_date=data[0]["review_date"];
      this.review_description=data[0]["review_description"];
      this.review_title=data[0]["review_title"];
      this.internshipId=data[0]["internship_id"];
    });
  }
  onclickCancle(){
    this._router.navigate(['menu/review']);
  }
  onclickSave(){
    if(this.cons.length<=1 && this.pros.length<=1 && this.review_description.length<=1 && this.review_title.length<=1){
      alert("Fill the details correctly");
    }
    else{
      // this._adminser.updateReview(this.review_id,new review_class(this.cons,this.pros,this.rating,this.review_date,this.review_description,this.review_title,this.internshipId)).subscribe((data:any)=>{
      //   this._router.navigate(['menu/review']);
      // })
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  Question:string;
  Option1:string;
  Option2:string;
  Option3:string;
  Option4:string;
  Answer:string;
  count:number=1;
 role:number;
 id:number;
 registerForm: FormGroup;
 //subject_list:subject_class[];
 subject_id:number=0;
 //question:questions_class[];
 //tag_list:tag_class[];
 tag_id:number=0;
 diff_id:number=0;

  constructor() { }
  onclickAdd()
  {

  }
  onclickCancle(){

  }
  ngOnInit(): void {
  }

}

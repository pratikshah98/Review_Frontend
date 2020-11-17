import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginService } from "../../service/login.service";
import { loginClass } from "../../classes/login";
import { student_class } from 'src/app/classes/studentClass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  flag:boolean=true;
  public loginIsInvalid: boolean;
  constructor(private loginService: LoginService,private formBuilder: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginIsInvalid = false;
    //console.log("in");
    if (this.form.valid) {

      const username = this.form.get('username').value;
      const password = this.form.get('password').value;

      this.loginService.studentLogin(new loginClass(username, password)).subscribe(
        (data:student_class[]) => {
          //console.log("hello");
          console.log(data);
          this._router.navigate(['menu']);
        }
      );

    }
    else {
      alert('Please Enter Valid Detalis');
    }

  }

}

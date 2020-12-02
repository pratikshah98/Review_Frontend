import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginService } from "../../service/login.service";
import { loginClass } from "../../classes/login";
import { student_class } from 'src/app/classes/studentClass';
import { adminLoginClass } from 'src/app/classes/adminLogin';
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
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginIsInvalid = false;
    if (this.form.valid) {

      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.loginService.studentLogin(new loginClass(username, password)).subscribe(
        (data:any) => {
          if(data.length==1)
          {
            localStorage.setItem('email',username);
            this._router.navigate(['studentmenu']);
          }
          else{
            this.loginService.adminLogin(new adminLoginClass(username,password)).subscribe(
              (admindata:any)=> {
                if(admindata.length==1)
                {
                  localStorage.setItem('email',username);
                  this._router.navigate(['menu']);
                }
                else{
                  alert('Email_id or Password Incorrect');
                }
              }
            )
          }
          
        }
      );

    }
    else {
      alert('Please Enter Valid Detalis');
    }

  }
}

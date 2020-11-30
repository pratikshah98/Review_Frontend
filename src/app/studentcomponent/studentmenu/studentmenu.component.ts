import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentmenu',
  templateUrl: './studentmenu.component.html',
  styleUrls: ['./studentmenu.component.css']
})
export class StudentmenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    role:number=0;
    email:string="";
  constructor(private breakpointObserver: BreakpointObserver,private _route:Router) {}

  ngOnInit(): void {
  }


}

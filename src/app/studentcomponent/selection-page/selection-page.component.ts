import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.css']
})
export class SelectionPageComponent implements OnInit {
  selectionInternship:any[];
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onclickAdd()
  {
    this._router.navigate(['studentmenu/writeReview']);
  }

}

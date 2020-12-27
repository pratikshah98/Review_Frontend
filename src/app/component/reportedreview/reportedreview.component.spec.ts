import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedreviewComponent } from './reportedreview.component';

describe('ReportedreviewComponent', () => {
  let component: ReportedreviewComponent;
  let fixture: ComponentFixture<ReportedreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

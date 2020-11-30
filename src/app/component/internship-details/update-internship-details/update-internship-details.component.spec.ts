import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInternshipDetailsComponent } from './update-internship-details.component';

describe('UpdateInternshipDetailsComponent', () => {
  let component: UpdateInternshipDetailsComponent;
  let fixture: ComponentFixture<UpdateInternshipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInternshipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInternshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInternshipTypeComponent } from './update-internship-type.component';

describe('UpdateInternshipTypeComponent', () => {
  let component: UpdateInternshipTypeComponent;
  let fixture: ComponentFixture<UpdateInternshipTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInternshipTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInternshipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

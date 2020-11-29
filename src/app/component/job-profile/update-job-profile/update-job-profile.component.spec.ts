import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobProfileComponent } from './update-job-profile.component';

describe('UpdateJobProfileComponent', () => {
  let component: UpdateJobProfileComponent;
  let fixture: ComponentFixture<UpdateJobProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

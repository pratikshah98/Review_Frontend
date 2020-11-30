import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipTypeComponent } from './internship-type.component';

describe('InternshipTypeComponent', () => {
  let component: InternshipTypeComponent;
  let fixture: ComponentFixture<InternshipTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

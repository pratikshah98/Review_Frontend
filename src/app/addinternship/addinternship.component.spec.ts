import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinternshipComponent } from './addinternship.component';

describe('AddinternshipComponent', () => {
  let component: AddinternshipComponent;
  let fixture: ComponentFixture<AddinternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

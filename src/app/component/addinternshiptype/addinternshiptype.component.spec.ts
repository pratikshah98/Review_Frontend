import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinternshiptypeComponent } from './addinternshiptype.component';

describe('AddinternshiptypeComponent', () => {
  let component: AddinternshiptypeComponent;
  let fixture: ComponentFixture<AddinternshiptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinternshiptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinternshiptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

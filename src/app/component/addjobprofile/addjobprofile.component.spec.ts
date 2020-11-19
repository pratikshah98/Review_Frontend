import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobprofileComponent } from './addjobprofile.component';

describe('AddjobprofileComponent', () => {
  let component: AddjobprofileComponent;
  let fixture: ComponentFixture<AddjobprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

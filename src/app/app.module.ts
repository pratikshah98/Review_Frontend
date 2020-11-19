import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { CardComponent } from './component/card/card.component';
import { MenuComponent } from './component/menu/menu.component';
import { CourseComponent } from './component/course/course.component';
import { InternshipDetailsComponent } from './component/internship-details/internship-details.component';
import { StudentComponent } from './component/student/student.component';
import { FacultyComponent } from './component/faculty/faculty.component';
import { CompanyComponent } from './component/company/company.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddinternshipComponent } from './addinternship/addinternship.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { LocationComponent } from './component/location/location.component';
import { JobProfileComponent } from './component/job-profile/job-profile.component';
import { AddlocationComponent } from './component/addlocation/addlocation.component';
import { AddjobprofileComponent } from './component/addjobprofile/addjobprofile.component';
import { AddcourseComponent } from './component/addcourse/addcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    MenuComponent,
    CourseComponent,
    InternshipDetailsComponent,
    StudentComponent,
    FacultyComponent,
    CompanyComponent,
    AddcompanyComponent,
    AddinternshipComponent,
    AddstudentComponent,
    AddfacultyComponent,
    LocationComponent,
    JobProfileComponent,
    AddlocationComponent,
    AddjobprofileComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

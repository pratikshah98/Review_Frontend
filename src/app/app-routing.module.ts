import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CardComponent } from './component/card/card.component';
import { MenuComponent } from './component/menu/menu.component';
import { CourseComponent } from './component/course/course.component';
import { InternshipDetailsComponent } from './component/internship-details/internship-details.component';
import { StudentComponent } from './component/student/student.component';
import { FacultyComponent } from './component/faculty/faculty.component';
import { CompanyComponent } from './component/company/company.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AddinternshipComponent } from './addinternship/addinternship.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { LocationComponent } from './component/location/location.component';
import { JobProfileComponent } from './component/job-profile/job-profile.component';
import { AddlocationComponent } from './component/addlocation/addlocation.component';
import { AddjobprofileComponent } from './component/addjobprofile/addjobprofile.component';
import { AddcourseComponent } from './component/addcourse/addcourse.component';
import { UpdateCompanyDetailsComponent } from './component/company/update-company-details/update-company-details.component';
import { UpdateCourseDetailsComponent } from './component/course/update-course-details/update-course-details.component';
import { UpdateJobProfileComponent } from './component/job-profile/update-job-profile/update-job-profile.component';
import { UpdateLocationComponent } from './component/location/update-location/update-location.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'card',component:CardComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'internship',component:InternshipDetailsComponent},
    {path:'student',component:StudentComponent},
    {path:'faculty',component:FacultyComponent},
    {path:'company',component:CompanyComponent},
    {path:'addcompany',component:AddcompanyComponent},
    {path:'updatecompany/:id',component:UpdateCompanyDetailsComponent},
    {path:'addinternship',component:AddinternshipComponent},
    {path:'addstudent',component:AddstudentComponent},
    {path:'addfaculty',component:AddfacultyComponent},
    {path:'location',component:LocationComponent},
    {path:'updatelocation/:id',component:UpdateLocationComponent},
    {path:'jobprofile',component:JobProfileComponent},
    {path:'updateprofile/:id',component:UpdateJobProfileComponent},
    {path:'course',component:CourseComponent},
    {path:'Updatecourse/:id',component:UpdateCourseDetailsComponent},
    {path:'addlocation',component:AddlocationComponent},
    {path:'addjobprofile',component:AddjobprofileComponent},
    {path:'addcourse',component:AddcourseComponent}
    
  ]},
  
  //{path:'addinternship',component:AddinternshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

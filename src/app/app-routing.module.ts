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
import { ReviewComponent } from './component/review/review.component';
import { InternshipTypeComponent } from './component/internship-type/internship-type.component';
import { StudentmenuComponent } from './studentcomponent/studentmenu/studentmenu.component';
import { WriteReviewComponent } from './studentcomponent/write-review/write-review.component';
import { ReadReviewComponent } from './studentcomponent/read-review/read-review.component';
import { UpdateInternshipTypeComponent } from './component/internship-type/update-internship-type/update-internship-type.component';
import { UpdateReviewComponent } from './component/review/update-review/update-review.component';
import { UpdateInternshipDetailsComponent } from './component/internship-details/update-internship-details/update-internship-details.component';
import { AddinternshiptypeComponent } from './component/addinternshiptype/addinternshiptype.component';
import { DashboardComponent } from './studentcomponent/dashboard/dashboard.component';
import { SelectionPageComponent } from './studentcomponent/selection-page/selection-page.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'adminDashboard',component:AdminDashboardComponent},
    {path:'internshipType',component:InternshipTypeComponent},
    {path:'updateintenshiptype/:id',component:UpdateInternshipTypeComponent},
    {path:'review',component:ReviewComponent},
    {path:'updatereview/:id',component:UpdateReviewComponent},
    {path:'internship',component:InternshipDetailsComponent},
    {path:'updateintenshipdetail/:id',component:UpdateInternshipDetailsComponent},
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
    {path:'addcourse',component:AddcourseComponent},
    {path:'addinternshiptype',component:AddinternshiptypeComponent},
    
    
  ]},  
  {path:'studentmenu',component:StudentmenuComponent,children:[
    {path:'card',component:CardComponent},
    {path:'readReview',component:ReadReviewComponent},
    {path:'studentDashboard',component:DashboardComponent},
    {path:'writeReview',component:WriteReviewComponent},  
    {path:'selectPage',component:SelectionPageComponent},
  ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

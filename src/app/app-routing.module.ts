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
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'card',component:CardComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'internship',component:InternshipDetailsComponent},
    {path:'student',component:StudentComponent},
    {path:'faculty',component:FacultyComponent},
    {path:'company',component:CompanyComponent},
    {path:'addcompany',component:AddcompanyComponent},
    {path:'addinternship',component:AddinternshipComponent},
    {path:'addstudent',component:AddstudentComponent},
    {path:'addfaculty',component:AddfacultyComponent}
  ]},
  {path:'course',component:CourseComponent},
  //{path:'addinternship',component:AddinternshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

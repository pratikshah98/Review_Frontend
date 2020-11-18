export class student_class
{
  constructor(
    public student_email:string,
    public student_contact_no : string | number,
    public student_name:string,
    public course_id?:number,
    public student_password?:string,
    public student_id?:number,)
    {}
};

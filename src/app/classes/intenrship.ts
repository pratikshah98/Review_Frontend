export class intenrship_class
{
  constructor(
    
    public added_on:Date,
    public ctc:number,
    public start_date:Date,
    public stipend:number,
    public company_id:number,
    public faculty_id:number,
    public internship_type_id:number,
    public job_profile_id:number,
    public location_id:number,
    public student_id:number,
    public internship_id?:number,
    public approved_status?: string | number,
    
    )
    {}
};

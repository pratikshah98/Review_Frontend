export class review_class
{
  constructor(

    public cons:string,
    public pros : string,
    public rating:number,
    public review_date:Date,
    public review_description:string,
    public review_title:string,
    public internship_id:string | number,
    public review_id?:number,
    public review_status?:number,
    public admin_id?:string | number,
    
    )
    {}
};

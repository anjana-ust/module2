class Employee{

    private  readonly empno: number;
    private ename :string;
     private sal :number;
     private attendence:any;
   /* constructor(){
        this.empno =101;
        this.ename="abc";
        this.sal=20000;
        this.attendence=18;
    }
    */
   
   public getEmpno():number{
    return this.empno ;
}
public getEname():string{
    return this.ename;
}

public getSal():number{
    return this.sal;
}
public getAttendance():number{
    return this.attendence;
}
    constructor(empno:number,ename:string,sal:number,attendence:any){
        this.empno =empno;
        this.ename=ename;
        this.sal=sal;
        this.attendence=attendence;
    }
    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendence);
    }
}   
    /*var emp = new Employee();

    var emp1 = new Employee();
    
    var emp2 = new Employee();
    
    emp.print();
    emp1.print();
    emp2.print();
*/
let emp = new Employee(1,'abc',3000,20);
let emp1 = new Employee(1,'xyz',4000,30);
let emp2 = new Employee(1,'qwe',5000,40);
/*emp.print();
class Emp{
    private fname :string;
    private mname!:string;
    private lname:string;
     
     Emp(fname:string,mname:string,lname:string){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;

     }
     getMname():string{
        return this.mname;
     }
    }
     let e1 = new Emp('a','b','c');
     console.log(e1.getMname());
*/
var emparray :
Employee[]=[emp,emp1,emp2];
emparray.forEach(element => {
    console.log(element);
    
});``
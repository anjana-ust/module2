var Employee = /** @class */ (function () {
    function Employee(empno, ename, sal, attendence) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendence = attendence;
    }
    /* constructor(){
         this.empno =101;
         this.ename="abc";
         this.sal=20000;
         this.attendence=18;
     }
     */
    Employee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee.prototype.getEname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getAttendance = function () {
        return this.attendence;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendence);
    };
    return Employee;
}());
/*var emp = new Employee();

var emp1 = new Employee();

var emp2 = new Employee();

emp.print();
emp1.print();
emp2.print();
*/
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(1, 'xyz', 4000, 30);
var emp2 = new Employee(1, 'qwe', 5000, 40);
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
var emparray = [emp, emp1, emp2];
emparray.forEach(function (element) {
    console.log(element);
});

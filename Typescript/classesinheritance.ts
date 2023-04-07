class vehicle{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}
class Car extends vehicle{
    model:string;
    constructor(name:string,model:string){
        super(name);
        this.model=this.model;
    }
    getNameModel():string{
        return this.model + this.name;
    }
}
class Truck extends vehicle{
    constructor(name:string){
        super(name);
    }
}

var mycar=new Car("Sports Model....","BMW");
console.log(mycar.getNameModel());
var truck = new Truck("Tata truck");
console.log(truck.getName);

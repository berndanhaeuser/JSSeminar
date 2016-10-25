interface Vertrag{
    id:number;
    fullname:string;
    sayName: () => void;
}

var vertrag:Vertrag = {
    id:123,
    fullname : "Horst Müller",
    sayName : function () {

    }

}

class Person implements Vertrag{
    sayName ():void{
        console.log(this.fullname);;
    }
    id: number;
    fullname: string;

    constructor(p_id:number, p_fn:string){
        this.id = p_id;
        this.fullname = p_fn;
    }

}



var p = new Person();
p.fullname = "asdf";
p.sayName();

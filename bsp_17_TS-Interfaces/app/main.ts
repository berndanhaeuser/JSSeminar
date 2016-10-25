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
    sayName (){
        console.log(this.fullname);;
    }
    id: number;
    fullname: string;

}



var p = new Person();
p.fullname = "asdf";
p.sayName();

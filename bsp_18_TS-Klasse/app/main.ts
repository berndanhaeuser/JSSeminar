interface Vertrag {
    id: number;
     fullname: string;
    sayName (a: string) : void;

}

var vertrag: Vertrag = {
    id: 123,
    fullname: "Horst Müller",
    sayName: function (a: string) {   }

}

class Person implements Vertrag {

     id: number;
    public fullname: string;
    public uniqueID;

    constructor(id: number, fn: string) {
        var uniqueID = Math.floor(Math.random() * 10000);
        //this.id = id;
        this.fullname = fn;

        this.uniqueID = function () {
            return uniqueID;
        };

        Object.defineProperties(this,
            {
                id:{
                    value: id
                }
            }
        )

        Object.freeze(this);

    }

    public get uid(){
        return this.uniqueID();
    }

    public sayName (prefix: string = ""):void{
        console.log(prefix + this.fullname);
    }
}


var p = new Person(231,"asdf");
p.fullname = "asdf";
p.sayName();
console.log(p.id);
console.dir(p);

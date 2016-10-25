//"use strict";

//Scope

if(true){
    var a = 1;
    let b = 3; //ES6 - Lokale Variable
    console.log(b);
}

const ABC = "asdf";


console.log(ABC);


//Arrow-Funktionen
let f1 = p => {
    console.log(p);
    console.log(this);
};
f1("Ausgabe");



function f2(p) {
    console.log(p);
    console.log(this);
}
f2("Ausgabe2222222222");


//Klassen
class Person {
    constructor(){
        this.fullname = "Horst Meier";
    }
}

var p1 = new Person();
console.log(p1);
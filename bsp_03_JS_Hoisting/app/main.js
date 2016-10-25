/* Sichtbarkeit */

//Hoisting setzt alle Defs "nach oben"

//"use strict";


//1. Interpreterdurchgang -> Funktions- und Variablendefinitionen einsammeln
//2. Durchgang -> Ausführen von Anweisungen

var aussen = "aha";
f1("ok");


function f1(p){
    var aussen; //Hoisting

    console.log(aussen);

    aussen = "soso";
    console.log(aussen);

    console.log(p);
    return 2;

}


//Funktionsausdruck
console.log(f2);
var f2 = function(){

};
console.log(f2);



/* Sichtbarkeit */

//"use strict";

var a = 1;
b = 2;

function machWas(){

    //Neuer Sichtbarkeitsbereich
    var c = 3;
    b = 7;
    d = 4; //global
}

console.log(b);
machWas();

console.log(b);
//globaler Bereich
console.log(a);
console.log(d);
console.log(c);
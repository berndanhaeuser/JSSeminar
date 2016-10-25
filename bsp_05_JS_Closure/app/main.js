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

//Immediately Invoked Function Expression
//IIFE --> Einmalige Ausführung, es gibt hiervon keine globale Variable
(function(){
        //neuer Sichtbarkeitsbereich
        "use strict";

        var a,s,d,f;

        //Anweisungen
    }
)


// Closure
var shopsystem = function() {
    //Sichtbarkeit - Closure
    var basket = []; //private Variable

    return function (item) {
        basket.push(item);
        return basket.slice();
        //return basket;
    }
}

    var warenkorb = shopsystem();
    console.log(warenkorb);
    warenkorb("Haus 1");
    warenkorb("Haus 2");

    var basket = warenkorb("Haus 3");
    console.log(basket);
    basket.push(234);
    console.log(basket);
    basket = warenkorb("Pferd");
    console.log(basket);
    console.log(warenkorb);



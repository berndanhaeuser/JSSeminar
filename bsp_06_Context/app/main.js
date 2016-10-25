var AAA = 123;
console.log(AAA);

//Aktueller Kontext: this
console.log(this);
console.log(this.AAA);
console.log(window.AAA);

(function(){
        "use strict";

        //neuer lokaler Sichtbarkeitsbereich
        var BBB = 234;
        //console.log(this.BBB);

        console.log(this); //Kein Kontext vorhanden


        //var context = new Object();
        var context = { //neuer Kontext
            color : "blue",
            amount: 12
        };

        context.shape = "rect";
        console.log(context);
    }
    () //DIREKT AUSFÜHREN, SIEHE IIFE
);
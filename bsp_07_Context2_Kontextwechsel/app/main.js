var AAA = 123;
console.log(AAA);

//Aktueller Kontext: this
console.log(this);
console.log(this.AAA);
console.log(window.AAA);



var color = "yellow";
function sagFarbe(){
    console.log(this.color);
}
sagFarbe();



(function(){
        "use strict";

        //neuer lokaler Sichtbarkeitsbereich
        var BBB = 234;
        //console.log(this.BBB);

        console.log(this); //Kein Kontext vorhanden


        //var context = new Object();
        var context = { //neuer Kontext
            color : "blue",
            amount: 12,
            sayColor: function(){
                console.log(this.color);
            }
        };

        context.shape = "rect";
        console.log(context);

        sagFarbe();
        sagFarbe.call(context);


        var liste = [
            {
                color : "#111111"
            },
            {
                color : "#222222"
            },
            {
                color : "#333333"
            },
            {
                color : "#444444"
            }
        ];

        liste.forEach(function (c) {
            sagFarbe.call(c);
        })

    }
    () //DIREKT AUSFÜHREN, SIEHE IIFE
);
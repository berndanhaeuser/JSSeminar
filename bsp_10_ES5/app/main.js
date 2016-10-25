"use strict"

// var obj1 = {
//     color : "blue"
// };
//
// Object.freeze(obj1);
// Object.seal(obj1);
//
// obj1.amount = 34;
// obj1.color = 234;

// console.log(obj1);

var Leistungsfall = function(lfn, vn){
    // this.leistungsfallnummer = lfn;
    // this.vertragsnummer = vn;

    //ES5
    Object.defineProperties(this,{
            leistungsfallnummmer: {
                value :lfn,
                writable: true, //änderbar
                configurable: false, //löschbar
                enumerable: false //for-in Schleife
            },
            vertragsID:{
                get:function(){
                    return vn;
                }
            }
        }
    )
    // Object.freeze(this);
}

var schaden = new Leistungsfall(32151,"15351351");
schaden.leistungsfallnummmer = 4711;
console.log(schaden);
console.log(schaden.vertragsID);
/*class - Classification - Gattung
instance - Ausprägung / Exemplar
member - Teil
mothiod Möglichkeit
property - eigenschaft
object - Objekt
status - Zustande
 */


//var obj = new Object();
var obj =  {};
console.log(obj);

//var liste = new Array();
var liste = ["ok"];
console.log(liste);
console.log(liste.length);



//Constructor-Pattern
var Person = function(){
    this.color = "yellowwwww";

    // this.sayColor = function(){
    //     console.log(this.color);
    // }
}


//Methoden
Person.prototype.sayColor = function () {
    console.log(this.color);
}



//var p1 =  Person();
var p1 = new Person();
console.log(p1);
p1.sayColor();


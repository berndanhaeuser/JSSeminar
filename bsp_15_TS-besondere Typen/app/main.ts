//Union Type

var pfad: string | string[];
pfad = "34";
pfad = 24;
pfad = ["asdf", "43"];

//Type Guards
var x: number|string = 3;
if (typeof x === 'string') {
    // console.log(x.splice());
} else {
    // console.log(x.splice());
}

//Type alias
type EinfacheListe = Array<string|boolean|number>;
var liste: EinfacheListe = [3, true];
// type Callback = () => void;
type Callback = () => string;

var f1: Callback = function () {
    return "sadf";
}


//Duck Typing
/*Geht nicht:
var person = {
    id : "324",
    fullname : "Horst müller"
} //Impliziter Typ

var person = {
    adresse = "aseef"
}
    */

/*geht wegen <any>*/
var person = {
    id : "324",
    fullname : "Horst müller"
}//Impliziter Typ

console.log(person);
person = <any>{
    adresse : "aseef"
};
console.log(person);
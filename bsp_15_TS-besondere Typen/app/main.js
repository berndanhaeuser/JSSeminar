//Union Type
var pfad;
pfad = "34";
pfad = 24;
pfad = ["asdf", "43"];
//Type Guards
var x = 3;
if (typeof x === 'string') {
}
else {
}
var liste = [3, true];
var f1 = function () {
    return "sadf";
};
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
    id: "324",
    fullname: "Horst müller"
}; //Impliziter Typ
console.log(person);
person = {
    adresse: "aseef"
};
console.log(person);
//# sourceMappingURL=main.js.map
var concat = function (a, b, c) {
    return a + b;
};
console.log(concat("a", "b", "c"));
//... ist rest
var concat2 = function (a, b) {
    var weitere = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        weitere[_i - 2] = arguments[_i];
    }
    console.log(weitere);
    console.log(arguments);
    return a + b;
};
console.log(concat2("a", "b", "c", "d"));
//Standard-Wert
var concat3 = function (a) {
    if (a === void 0) { a = "StandardWertFuer A"; }
    console.log(a);
    return a;
};
concat3("Concat3 angegeben");
concat3();
var concat4 = function (a, b) {
    return a + b;
};
var concat5 = function (a, b) {
    return a.toString() + b.toString();
};
var concat6 = function (a, b) {
    return (a + b).toString();
};
console.log("Console 4====================");
console.log(concat4(1, "2"));
console.log(concat4("1", "2"));
console.log("Console 5====================");
console.log(concat5(1, 2));
console.log(concat5("1", "2"));
console.log(concat6(1, 2));
console.log(concat6("1", "2"));
//# sourceMappingURL=main.js.map
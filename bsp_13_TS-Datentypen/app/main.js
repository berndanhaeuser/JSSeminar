console.log("13");
"use strict";
var flag = true;
// flag = 1;
console.log(flag);
var Elefant = (function () {
    function Elefant() {
    }
    return Elefant;
}());
var wert1 = 123;
var apicode = "12dsaf";
var liste = [2, 45, 455];
var liste1 = [true, false];
var liste2 = ["2", 3, new Elefant()];
var liste3 = ["asdf", "dfdf"];
var Vertrag;
(function (Vertrag) {
    Vertrag[Vertrag["Neukunde"] = 0] = "Neukunde";
    Vertrag[Vertrag["Aktiv"] = 1] = "Aktiv";
    Vertrag[Vertrag["Ruhend"] = 2] = "Ruhend";
    Vertrag[Vertrag["Saniert"] = 3] = "Saniert";
})(Vertrag || (Vertrag = {}));
;
var vertrag = Vertrag.Ruhend;
console.log(vertrag);
console.log(Vertrag[vertrag]);
//# sourceMappingURL=main.js.map
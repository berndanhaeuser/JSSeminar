var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Kategorie = (function () {
    function Kategorie() {
    }
    return Kategorie;
}());
var Land = (function () {
    function Land() {
    }
    return Land;
}());
var Neu = (function (_super) {
    __extends(Neu, _super);
    function Neu() {
        _super.apply(this, arguments);
    }
    return Neu;
}(Kategorie));
var Vorfall = (function () {
    function Vorfall() {
    }
    Vorfall.prototype.label = function (template) {
        return undefined;
    };
    Vorfall.prototype.log = function (text) {
        console.log(text);
    };
    return Vorfall;
}());
var vorfall = new Vorfall();
vorfall.id = 4711;
vorfall.log("sdf");
console.dir(vorfall);
//# sourceMappingURL=main.js.map
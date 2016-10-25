var vertrag = {
    id: 123,
    fullname: "Horst Müller",
    sayName: function (a) { }
};
var Person = (function () {
    function Person(id, fn) {
        var uniqueID = Math.floor(Math.random() * 10000);
        //this.id = id;
        this.fullname = fn;
        this.uniqueID = function () {
            return uniqueID;
        };
        Object.defineProperties(this, {
            id: {
                value: id
            }
        });
        Object.freeze(this);
    }
    Object.defineProperty(Person.prototype, "uid", {
        get: function () {
            return this.uniqueID();
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.sayName = function (prefix) {
        if (prefix === void 0) { prefix = ""; }
        console.log(prefix + this.fullname);
    };
    return Person;
}());
var p = new Person(231, "asdf");
p.fullname = "asdf";
p.sayName();
console.log(p.id);
console.dir(p);
//# sourceMappingURL=main.js.map
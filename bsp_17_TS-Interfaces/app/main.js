var vertrag = {
    id: 123,
    fullname: "Horst Müller",
    sayName: function () {
    }
};
var Person = (function () {
    function Person() {
    }
    Person.prototype.sayName = function () {
        console.log(this.fullname);
        ;
    };
    return Person;
}());
var p = new Person();
p.fullname = "asdf";
p.sayName();
//# sourceMappingURL=main.js.map
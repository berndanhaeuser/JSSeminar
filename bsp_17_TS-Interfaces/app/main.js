var vertrag = {
    id: 123,
    fullname: "Horst Müller",
    sayName: function () {
    }
};
var Person = (function () {
    function Person(p_id, p_fn) {
        this.id = p_id;
        this.fullname = p_fn;
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
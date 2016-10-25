var Person = function(){
    "use strict";

    var Person = function(fn, pid){
        //priv. Variable
        this.fullname = fn;

        //ES3 - Getter
        this.personalID = function () {
            return pid;
        }
    };


    //Methoden
    Person.prototype.sayName = function(){
        console.log(this.fullname);
    }


    //static
    PersonX.staticVar = "test";
    return Person;
}();

var p1 = new Person("Hans","12354");
console.log(p1);
console.log(p1.fullname);
console.log(p1.personalID());
p1.sayName();

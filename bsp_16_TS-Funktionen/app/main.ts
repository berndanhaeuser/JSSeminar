type Alterspruefung = (a: string, b: string, c:string) => string;
var concat:Alterspruefung = function (a: string, b: string, c: string):string {
    return a + b;
}

console.log(concat("a","b","c"));


//... ist rest
var concat2 = function (a: string, b: string, ...weitere: string[]):string {
    console.log(weitere);
    console.log(arguments);
    return a + b;
}



console.log(concat2("a","b","c","d"));

//Standard-Wert
var concat3 = function (a:string = "StandardWertFuer A") :string{
    console.log(a);
    return a;
}

concat3("Concat3 angegeben");
concat3();

var concat4 = function (a: any, b: any) :any{
    return a + b;
}
var concat5 = function (a: any, b: any) :any{
    return a.toString() + b.toString();
}
var concat6 = function (a: any, b: any) :any{
    return (a + b).toString();
}

console.log("Console 4====================");
console.log(concat4(1,"2"));
console.log(concat4("1","2"));

console.log("Console 5====================");
console.log(concat5(1,2));
console.log(concat5("1","2"));

console.log(concat6(1,2));
console.log(concat6("1","2"));
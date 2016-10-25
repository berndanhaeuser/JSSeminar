console.log("13");
"use strict";
var flag : boolean = true;
// flag = 1;
console.log(flag);


var wert1: number = 123;
var apicode: string = "12dsaf";

var liste: Array<any> = [2,45,455];
var liste1: Array<boolean> = [true,false];
var liste2: Array<string|number> = ["2",3];
var liste3: string[] = ["asdf","dfdf"];

enum Vertrag {Neukunde, Aktiv, Ruhend, Saniert};
var vertrag : Vertrag = Vertrag.Ruhend;

console.log(vertrag);
console.log(Vertrag[vertrag]);

console.dir(Vertrag);


var veraenderlich: any[] = true;
// var veraenderlich: any[] = [true];
function f1():void{}

var a = 123;
a = f1();
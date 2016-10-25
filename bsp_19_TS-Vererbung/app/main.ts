interface Produkt {
    id: number;
    label(template: string): string;
}

interface Lager {
    regal: string;
}

interface Vertrag extends Produkt, Lager {
    name: string;
}

interface Vertrieb {
    log(text: string): void;
}

class Kategorie {
    private cat: string[];
}

class Land {
    public country: string;
}

class Neu extends Kategorie {

}

class Vorfall implements Vertrag, Vertrieb {
    name: string;
    id: number;
    regal: string;
    fullname: string;

    label(template: string): string {
        return undefined;
    }


    log(text: string): void {
        console.log(text);
    }

}


var vorfall = new Vorfall();
vorfall.id = 4711;
vorfall.log("sdf");
console.dir(vorfall);


//----------------------

class Kleidung {
    public preis: number;

    constructor(preis: number) {
        this.preis = preis;
    }
}

class Hemd extends Kleidung {
    static get farbe(): string {
        return this._farbe;
    }

    static set farbe(value: string) {
        this._farbe = value;
    }
    public kragenweite: number;
    private static _farbe:string = "Schwarz";

    constructor(kragenweite: number, preis: number) {
        super(preis);
        this.kragenweite = kragenweite;
    }
}

var k = new Kleidung(11);
var h = new Hemd(11, 111);

console.log(k);
console.log(h);

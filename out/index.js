"use strict";
let myundefined;
let mynull;
let myunknown;
let myany;
let mynumber;
let mystring;
let myboolean;
let mysymbol;
let myarray;
let myarray2;
let mytuple;
let myobject;
let myobject2;
let myfunction;
let myunion;
var Day;
(function (Day) {
    Day[Day["MON"] = 100] = "MON";
    Day[Day["TUE"] = 101] = "TUE";
    Day[Day["WED"] = 102] = "WED";
    Day[Day["THU"] = 103] = "THU";
    Day[Day["FRI"] = 104] = "FRI";
    Day[Day["SAT"] = 105] = "SAT";
    Day[Day["SUN"] = 106] = "SUN";
})(Day || (Day = {}));
let myenum;
function optionalparams(a, b, c = "") {
}
function neverReturns() {
    throw new Error();
    while (true) { }
}
let myinterface;
class Mysuperclass {
    constructor() {
        this.prop = "prop";
    }
    func() { }
}
let mysuperclass;
class Mysubclass extends Mysuperclass {
    constructor() {
        super(...arguments);
        this.extraprop = "extraprop";
    }
    extrafunc() { }
}
let mysubclass;
const ducktapped = {
    prop: "",
    func: function () { }
};
class VisibilityModifiers {
    constructor(pubProp, pubProp2, _privProp, roProp) {
        this._privProp = _privProp;
        this.roProp = roProp;
        this.pubProp = pubProp;
        this.pubProp2 = pubProp2;
    }
    get privProp() {
        return this._privProp;
    }
    set privProp(v) {
        this._privProp = v;
    }
}
const visibilityModifiers = new VisibilityModifiers(1, 2, 3, 4);
//visibilityModifiers.roProp = 1 //error cause it's readonly

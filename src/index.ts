let myundefined: undefined
let mynull: null
let myunknown: unknown
let myany: any
let mynumber: number
let mystring: string
let myboolean: boolean
let mysymbol: symbol
let myarray: any[]
let myarray2: Array<number>
let mytuple: [any, number, string]
let myobject: object
let myobject2: {x:number, y:number}
let myfunction: (a:number, b:string) => string
type mytype = number | string
let myunion: mytype
enum Day {MON=100, TUE, WED, THU, FRI, SAT, SUN}
let myenum: Day

function optionalparams(a:any, b?: string, c = ""): void {
    
}
function neverReturns(): never {
    throw new Error()
    while (true) {}
}

interface Myinterface{
    prop: string
    func(): void   
}
let myinterface: Myinterface

class Mysuperclass implements Myinterface{
    prop = "prop"
    func() {}
}
let mysuperclass: Mysuperclass

class Mysubclass extends Mysuperclass{
    extraprop = "extraprop"
    extrafunc() {}
}
let mysubclass: Mysubclass

const ducktapped: Myinterface = {
    prop: "",
    func: function (): void {}
}


class VisibilityModifiers{ //by putting the modifier at constructor param, there's no need of putting that prop anywhere else
    pubProp //same as if it had public modifier
    public pubProp2

    constructor(pubProp:number, pubProp2:number, private _privProp:number, readonly roProp:number){
        this.pubProp = pubProp
        this.pubProp2 = pubProp2
    }

    get privProp() : number {
        return this._privProp
    }
    set privProp(v : number) {
        this._privProp = v;
    }
}
const visibilityModifiers = new VisibilityModifiers(1,2,3,4)
//visibilityModifiers.roProp = 1 //error cause it's readonly
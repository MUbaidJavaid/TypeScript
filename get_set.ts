class GetSet {
    private _name: string;
    private _age: number;
    constructor(name:string, age:number) {
        this._name = name;
        this._age = age;
    }

    
    public get name() : string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get age() : number {
        return this._age;
    }
    public set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
    
}


var getSet = new GetSet("John", 30);
console.log(getSet.name); // John
console.log(getSet.age); // 30
getSet.name = "Jane";
console.log(getSet.name); // Jane
getSet.age = 25;
console.log(getSet.age); // 25 


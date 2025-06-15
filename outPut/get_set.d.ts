declare class GetSet {
    private _name;
    private _age;
    constructor(name: string, age: number);
    get name(): string;
    set name(value: string);
    get age(): number;
    set age(value: number);
}
declare var getSet: GetSet;

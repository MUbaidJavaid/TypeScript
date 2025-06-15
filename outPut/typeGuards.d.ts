declare let useDataTypeGuards: string | number | boolean | null;
declare function isString(value: any): value is string;
declare function isNumber(value: any): value is number;
declare function isBoolean(value: any): value is boolean;
declare function isNull(value: any): value is null;
type DataType = string | number | boolean | null;
declare function processData(data: DataType): void;
interface UserTypeGuard {
    name: string;
    age: number;
    isActive: boolean;
}
declare function processUser(user: UserTypeGuard): void;
declare const userTypeGuard: UserTypeGuard;
type Callback = (message: string) => void;
declare function executeCallback(callback: Callback): void;
declare const myCallback: Callback;
type StringArray = string[];
declare function processStringArray(arr: StringArray): void;
declare const myStringArray: StringArray;
type StringNumberTuple = [string, number];
declare function processStringNumberTuple(tuple: StringNumberTuple): void;
declare const myTuple: StringNumberTuple;
type GenericType<T> = T;
declare function processGeneric<T>(data: GenericType<T>): void;
declare class User {
    name: string;
    age: number;
    isActive: boolean;
    constructor(name: string, age: number, isActive: boolean);
}
declare function processUserClass(user: User): void;
declare const userClass: User;
declare class DataProcessor {
    process(data: string | number | boolean | null): void;
}
declare const dataProcessor: DataProcessor;
type Shape = Circle | Rectangle;
interface Circle {
    kind: 'circle';
    radius: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}
declare function processShape(shape: Shape): void;
declare const circle: Circle;
declare const rectangle: Rectangle;
type MappedType<T> = {
    [K in keyof T]: T[K];
};
declare function processMappedType<T>(data: MappedType<T>): void;
interface StringMap {
    key: string;
}
declare const mappedDataGuards: MappedType<StringMap>;
type ConditionalType<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : null;
declare function processConditionalType<T>(data: ConditionalType<T>): void;
type AliasType = string | number | boolean | null;
declare function processAliasType(data: AliasType): void;

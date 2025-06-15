let useDataTypeGuards : string | number | boolean | null = 'string';

useDataTypeGuards = 42; // This is valid

if (typeof useDataTypeGuards === 'string') {
  console.log('useDataTypeGuards is a string');
} else if (typeof useDataTypeGuards === 'number') {
  console.log('useDataTypeGuards is a number');
} else if (typeof useDataTypeGuards === 'boolean') {
    console.log('useDataTypeGuards is a boolean');
    }
else if (useDataTypeGuards === null) {
  console.log('useDataTypeGuards is null');
}

// Example of a type guard function
function isString(value: any): value is string {
    return typeof value === 'string';
    }
    
    function isNumber(value: any): value is number {
    return typeof value === 'number';
    }
    
    function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
    }
    
    function isNull(value: any): value is null {
    return value === null;
    }
    
    if (isString(useDataTypeGuards)) {
    console.log('useDataTypeGuards is a string');
    } else if (isNumber(useDataTypeGuards)) {
    console.log('useDataTypeGuards is a number');
    } else if (isBoolean(useDataTypeGuards)) {
    console.log('useDataTypeGuards is a boolean');
    } else if (isNull(useDataTypeGuards)) {
    console.log('useDataTypeGuards is null');
    }


// Example of using type guards with a union type
type DataType = string | number | boolean | null;
function processData(data: DataType) {
    if (isString(data)) {
        console.log(`Processing string: ${data}`);
    } else if (isNumber(data)) {
        console.log(`Processing number: ${data}`);
    } else if (isBoolean(data)) {
        console.log(`Processing boolean: ${data}`);
    } else if (isNull(data)) {
        console.log('Processing null value');
    } else {
        console.log('Unknown data type');
    }
}

// Example usage
processData('Hello, world!');
processData(42);
processData(true);
processData(null);
// Example of using type guards with an object type
interface UserTypeGuard {
    name: string;
    age: number;
    isActive: boolean;
}

function processUser(user: UserTypeGuard) {
    if (isString(user.name)) {
        console.log(`User name: ${user.name}`);
    } else {
        console.log('User name is not a string');
    }

    if (isNumber(user.age)) {
        console.log(`User age: ${user.age}`);
    } else {
        console.log('User age is not a number');
    }

    if (isBoolean(user.isActive)) {
        console.log(`User active status: ${user.isActive}`);
    } else {
        console.log('User active status is not a boolean');
    }

}
// Example usage
const userTypeGuard: UserTypeGuard = {
    name: 'Alice',
    age: 30,
    isActive: true
};
processUser(userTypeGuard);

// Example of using type guards with a function type
type Callback = (message: string) => void;
function executeCallback(callback: Callback) {
    if (typeof callback === 'function') {
        callback('Callback executed successfully!');
    } else {
        console.log('Provided callback is not a function');
    }
}

// Example usage
const myCallback: Callback = (message: string) => {
    console.log(message);
};
executeCallback(myCallback);
// Example of using type guards with an array type
type StringArray = string[];
function processStringArray(arr: StringArray) {
    if (Array.isArray(arr) && arr.every(isString)) {
        console.log('Processing string array:', arr);
    } else {
        console.log('Provided array is not a valid string array');
    }
}

// Example usage
const myStringArray: StringArray = ['apple', 'banana', 'cherry'];
processStringArray(myStringArray);

// Example of using type guards with a tuple type
type StringNumberTuple = [string, number];
function processStringNumberTuple(tuple: StringNumberTuple) {
    if (Array.isArray(tuple) && tuple.length === 2 && isString(tuple[0]) && isNumber(tuple[1])) {
        console.log(`Processing tuple: ${tuple[0]}, ${tuple[1]}`);
    } else {
        console.log('Provided tuple is not a valid StringNumberTuple');
    }
}

// Example usage
const myTuple: StringNumberTuple = ['example', 123];
processStringNumberTuple(myTuple);
// Example of using type guards with a generic type
type GenericType<T> = T;
function processGeneric<T>(data: GenericType<T>) {
    if (isString(data)) {
        console.log(`Processing generic string: ${data}`);
    } else if (isNumber(data)) {
        console.log(`Processing generic number: ${data}`);
    } else if (isBoolean(data)) {
        console.log(`Processing generic boolean: ${data}`);
    } else if (isNull(data)) {
        console.log('Processing generic null value');
    } else {
        console.log('Unknown generic data type');
    }
}


// Example usage
processGeneric('Generic string');
processGeneric(42);
processGeneric(true);
processGeneric(null);

//  Example of using type guards with a class type
class User {
    constructor(public name: string, public age: number, public isActive: boolean) {}
}
function processUserClass(user: User) {
    if (isString(user.name)) {
        console.log(`User name: ${user.name}`);
    } else {
        console.log('User name is not a string');
    }

    if (isNumber(user.age)) {
        console.log(`User age: ${user.age}`);
    } else {
        console.log('User age is not a number');
    }

    if (isBoolean(user.isActive)) {
        console.log(`User active status: ${user.isActive}`);
    } else {
        console.log('User active status is not a boolean');
    }
}
// Example usage
const userClass = new User('Bob', 25, true);
processUserClass(userClass);
// Example of using type guards with a union type in a class
class DataProcessor {
    process(data: string | number | boolean | null) {
        if (isString(data)) {
            console.log(`Processing string: ${data}`);
        } else if (isNumber(data)) {
            console.log(`Processing number: ${data}`);
        } else if (isBoolean(data)) {
            console.log(`Processing boolean: ${data}`);
        } else if (isNull(data)) {
            console.log('Processing null value');
        } else {
            console.log('Unknown data type');
        }
    }
}

// Example usage
const dataProcessor = new DataProcessor();
dataProcessor.process('Hello, world!');
dataProcessor.process(42);
dataProcessor.process(true);
dataProcessor.process(null);
// Example of using type guards with a discriminated union
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
function processShape(shape: Shape) {
    if (shape.kind === 'circle') {
        console.log(`Processing circle with radius: ${shape.radius}`);
    } else if (shape.kind === 'rectangle') {
        console.log(`Processing rectangle with width: ${shape.width} and height: ${shape.height}`);
    }
    else {
        console.log('Unknown shape type');
    }

}
// Example usage
const circle: Circle = { kind: 'circle', radius: 10 };
const rectangle: Rectangle = { kind: 'rectangle', width: 5, height: 10 };
processShape(circle);
processShape(rectangle);
// Example of using type guards with a mapped type
type MappedType<T> = {
    [K in keyof T]: T[K];
};
function processMappedType<T>(data: MappedType<T>) {
    if (isString(data)) {
        console.log(`Processing mapped string: ${data}`);
    } else if (isNumber(data)) {
        console.log(`Processing mapped number: ${data}`);
    } else if (isBoolean(data)) {
        console.log(`Processing mapped boolean: ${data}`);
    } else if (isNull(data)) {
        console.log('Processing mapped null value');
    } else {
        console.log('Unknown mapped data type');
    }
}
// Example usage
interface StringMap {
    key: string;
}
const mappedDataGuards: MappedType<StringMap> = { key: 'value' };
processMappedType(mappedDataGuards);
// Example of using type guards with a conditional type
type ConditionalType<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : null;
function processConditionalType<T>(data: ConditionalType<T>) {
    if (isString(data)) {
        console.log(`Processing conditional string: ${data}`);
    } else if (isNumber(data)) {
        console.log(`Processing conditional number: ${data}`);
    } else if (isBoolean(data)) {
        console.log(`Processing conditional boolean: ${data}`);
    } else if (isNull(data)) {
        console.log('Processing conditional null value');
    } else {
        console.log('Unknown conditional data type');
    }
}
// Example usage
processConditionalType<string>('Conditional string');
processConditionalType<number>(42);
processConditionalType<boolean>(true);
processConditionalType<null>(null);
// Example of using type guards with a type alias
type AliasType = string | number | boolean | null;
function processAliasType(data: AliasType) {
    if (isString(data)) {
        console.log(`Processing alias string: ${data}`);
    } else if (isNumber(data)) {
        console.log(`Processing alias number: ${data}`);
    } else if (isBoolean(data)) {
        console.log(`Processing alias boolean: ${data}`);
    } else if (isNull(data)) {
        console.log('Processing alias null value');
    } else {
        console.log('Unknown alias data type');
    }
}
// Example usage
processAliasType('Alias string');
processAliasType(42);
processAliasType(true);
processAliasType(null);





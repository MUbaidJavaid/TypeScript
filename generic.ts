function Generic<T>(data:T): T {
    return data;
}

// Example usage
const stringData = Generic<string>("Hello, World!");
const numberData = Generic<number>(42);
const booleanData = Generic<boolean>(true);
const objectData = Generic<{ name: string; age: number }>({ name: "Alice", age: 30 });
const arrayData = Generic<number[]>([1, 2, 3, 4, 5]);
const tupleData = Generic<[number, string, boolean]>([1, "Alice", true]);
const nullData = Generic<null>(null);
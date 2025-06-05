declare var unionOfvariable: string | number | null | [] | {} | undefined;
declare function unionFunction(param: string | number | boolean): string;
declare function mainUnion(): void;
declare var unionArray: (string | number)[];
declare function unionArrayFunction(arr: (string | number)[]): string;
declare function mainUnionArray(): void;
declare var unionObject: {
    name: string;
    age: number;
} | {
    title: string;
    year: number;
};
declare function unionObjectFunction(obj: {
    name?: string;
    age?: number;
    title?: string;
    year?: number;
}): string;
declare function mainUnionObject(): void;

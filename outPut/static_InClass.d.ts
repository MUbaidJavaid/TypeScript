declare class StaticInClass {
    static staticProperty: string;
    nameWithStatic: string;
    constructor(name: string);
    static staticMethod(): string;
    static staticMethodWithParams(param: string): string;
}
declare var staticInClass: StaticInClass;

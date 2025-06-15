interface ClassInterface {
    getClassName(): string;
    getMethods(): string[];
    addMethod(method: string): void;
    removeMethod(method: string): void;
}
declare class ClassInterface implements ClassInterface {
    private className;
    private methods;
    constructor(className: string, methods: string[]);
}
export { ClassInterface };
export { ClassInterface as ClassInterfaceImplementation };
export default ClassInterface;

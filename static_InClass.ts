class StaticInClass {
  static staticProperty: string = "I am a static property";
  nameWithStatic: string;
  constructor(name: string) {
        this.nameWithStatic = name;
    }
    static staticMethod(): string {
        return "I am a static method   "+ this.staticProperty;
    }
    static staticMethodWithParams(param: string): string {
        return `Static method called with param: ${param}`;
    }

}

var staticInClass = new StaticInClass("Static Example");
// Example usage
console.log(StaticInClass.staticProperty); // I am a static property
console.log(StaticInClass.staticMethod()); // I am a static method
console.log(StaticInClass.staticMethodWithParams("Hello")); // Static method called with param: Hello
// Exporting the class
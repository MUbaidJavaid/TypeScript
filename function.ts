function frutes(fruit: string): string {
    return `I like ${fruit}`;
}
 function vegetables(vegetable: string): string {    
    return `I like ${vegetable}`;
}
function animals(animal: string): string | number | boolean{
    if (animal === "dog") {
        return "I like dogs";
    } else if (animal === "cat") {
        return 42; // Example of returning a number
    } else {
        return true; // Example of returning a boolean
    }

}

function mainFunction(): any {
    const fruitMessage = frutes("apple");
    const vegetableMessage = vegetables("carrot");
    const animalMessage = animals("dog");

    console.log(fruitMessage);
    console.log(vegetableMessage);
    console.log(animalMessage);

    return "All functions executed successfully";
}
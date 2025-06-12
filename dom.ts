var headingElements = document.querySelector('h1')!;
var headingElementClass = document.querySelector('.headingStyle')! as HTMLHeadingElement;

var anchorElement = document.querySelector('a')!;
var anchorElementClass = document.querySelector('.anchorStyle')! as HTMLAnchorElement;

console.log(headingElements.textContent);
console.log(headingElementClass.textContent);

console.log(anchorElement.href);
console.log(anchorElementClass.href);

//We define an empty array
const list = [];
console.log("list", list);

const color = ["pink", "blue", "green"];
console.log("color", color);

//shows color blue
console.log("item", color[1]);

//shows 3 items in list
console.log("item", color.length);

console.log("last position dynamic", color[color.length - 1]);

//push - add element to the array
color.push("red");
console.log("color after 2 pushing", color);

color.push("violet");
console.log("color after 2 pushing", color);

//pop- remove last element
color.pop();
console.log("color after popping", color);

//shift- delete the first element in the array

color.shift();
console.log("color after shifting", color);

let elementRemoved = color.shift;
console.log("color after shifting", color);
console.log("the element removed is", elementRemoved);

//unshift - add an item to the first position of the array

color.unshift("orange");
console.log("color after unshifting", color);

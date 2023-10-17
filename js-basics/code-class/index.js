// Let's keep learning

// let cohortName = "lime";

// console.log("Cohort Name", cohortName);

console.log("i am in the js file");

// clear the console
console.clear();

console.error("error");

//selecting element by tag name

const title = document.querySelector("h1");

console.log("title", title);

//selecting the element by an attribute, in this case data-js

const paragraph = document.querySelector('[data-js="paragraph"]');

console.log("paragraph", paragraph);

// adding a class to the element
title.classList.add("dark");
title.classList.remove("dark");

//

const alertButton = document.querySelector('[data-js="color-button"]');

console.log("Alert Button", alertButton);

//type of event, what we have to do when it happens
alertButton.addEventListener("click", () => {
  // toggle add the class to the element if it is not there yet. but if it is there it removes it.
  paragraph.classList.toggle("alert");
});

const squareColor = document.querySelector('[data-js="square"]');
console.log("square color: ", squareColor);

squareColor.addEventListener("click", () => {
  squareColor.classList.toggle("color");
});

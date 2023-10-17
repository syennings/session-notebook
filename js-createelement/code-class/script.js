console.clear();

const form = document.querySelector('[data-js="card-form"]');

// console.log(form);

///three ways of doing the same.

// 1. arrow functions

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("I am in the event with the arrow function");
// });

// // 2. callback functions

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log("I am in the event with a function");
// }

// form.addEventListener("submit", handleSubmit);

// 3.

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("i am in the event function");
// });

////////////////------

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("I am in the event with the arrow function");

//   const formData = FormData(e.target);
//   const dataForm = Object.fromEntries(formData);

//   console.log("data form", dataForm);
// });

let counter = 0;

const displayCard = document.querySelector('[data-js="card-container"]');

// console.log("display card", displayCard);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("I am in the event with the arrow function");
//   counter++;
//   console.log("counter", counter);

//   displayCard.innerHTML += '<section class="card">' + counter + "</section>";
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("I am in the event with the arrow function");
//   counter++;
//   console.log("counter", counter);

//   const formData = new FormData(e.target);
//   const dataForm = Object.fromEntries(formData);

//   console.log("data form", dataForm);

//   displayCard.innerHTML +=
//     '<section class="card"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png" alt = "image"><p>' +
//     counter +
//     "</p><p>" +
//     dataForm["inputText"] +
//     "</p></section>";
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("I am in the event with the arrow function");
//   counter++;
//   console.log("counter", counter);

//   const formData = new FormData(e.target);
//   const dataForm = Object.fromEntries(formData);

//   console.log("data form", dataForm);

//   const counterCard = document.createElement("section");
//   card.classList.add("card");

//   const pCard = document.createElement("p");
//   pCard.textContent = "the counter is :" + counter;

//   card.append(pCard);
//   displayCard.append(card);
// });






const form = document.querySelector('[data-js = "form"]');

const list = document.querySelector(".list");
// console.log(list);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log("SUBMIT", event.target.elements.name.value);

  const formData = new FormData(event.target);
  const guest = object.fromEntries(formData);
  //   console.log(guest);
  //   console.log(guest.date);

  const newGuest = `<div>${guest.name} — ${guest.email} </div>`;

  const actualList = list.innerHTML;
  list.innerHTML = actualList + newGuest;
});

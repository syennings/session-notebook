const form = document.querySelector('[data-js="form"]')
const list = document.querySelector(".list")

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log(event);
    console.log(event.target);
    const formData = new FormData(event.target)

    const guest = Object.fromEntries(formData)

    console.log(guest);

    const newGuest = `<div>${guest.username} - ${guest.email}</div>`

    const actualList = list.innerHTML;
    list.innerHTML = actualList + newGuest;
})

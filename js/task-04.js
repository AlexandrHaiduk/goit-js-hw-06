const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementtBtn = document.querySelector('button[data-action="increment"]')
const valueEl = document.querySelector("#value")

let counter = 0;


decrementBtn.addEventListener("click", () => {
    counter -= 1
    valueEl.textContent = counter 
})

incrementtBtn.addEventListener("click", () => {
    counter += 1
    valueEl.textContent = counter
})

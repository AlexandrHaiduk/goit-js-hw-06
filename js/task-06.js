const inputEl = document.querySelector("#validation-input");

const lengthValue = inputEl.getAttribute("data-length")

inputEl.addEventListener('blur', event => {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.remove('valid');
    console.log("lengthValue ",lengthValue)
    console.log("event.currentTarget.value.length ",event.currentTarget.value.length)

    if (event.currentTarget.value.length == lengthValue) {
        event.currentTarget.classList.add("valid")
    } else {
        event.currentTarget.classList.add('invalid')
    }   
})


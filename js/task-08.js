const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", event => {
    event.preventDefault()
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!email || !password) {
        alert("Всі поля повинні бути заповнені")
    } else {
  
        const formData = {
            email,
            password,           
        }

        console.log(formData)
    }

event.target.reset()
})



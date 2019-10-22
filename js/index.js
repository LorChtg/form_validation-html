const form = document.getElementsByTagName('form')[0]
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
//const error = document.querySelector('.error')

console.log(userName.nextSibling)
console.log(userName.nextElementSibling)

userName.addEventListener("input", (event) => {
  const error = userName.nextElementSibling
  if (userName.validity.valid) {
    error.innerHTML = ""
  }
}, false)

email.addEventListener("input", (event) => {
  const error = email.nextElementSibling
  if (email.validity.valid) {
    error.innerHTML = ""
  }
}, false)

password.addEventListener("input", (event) => {
  const error = password.nextElementSibling
  if (password.validity.valid) {
    error.innerHTML = ""
  }
}, false)

form.addEventListener("submit", (event) => {
  if (!userName.validity.valid) {
    const error = userName.nextElementSibling
    error.innerHTML = "Your username should only contain letters"
    event.preventDefault()
  }
  if (!email.validity.valid) {
    const error = email.nextElementSibling
    error.innerHTML = "Enter a gmail address"
    event.preventDefault()
  }
  if (!password.validity.valid) {
    const error = password.nextElementSibling
    error.innerHTML = "Your password should contain at least one letter, one capital, one number, one symbol."
    event.preventDefault()
  }
}, false)
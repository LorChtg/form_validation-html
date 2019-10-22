const form = document.getElementsByTagName('form')[0]
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
//const error = document.querySelector('.error')

const userErrorMessage = "Your username should only contain letters"
const mailErrorMessage = "Enter a gmail address"
const passwordErrorMessage = "Your password should contain at least one letter, one capital, one number, one symbol."

userName.addEventListener("input", (event) => {
  const error = userName.nextElementSibling
  if (userName.validity.valid) {
    error.innerHTML = ""
  }
  else {
    error.innerHTML = userErrorMessage
  }
}, false)

email.addEventListener("input", (event) => {
  const error = email.nextElementSibling
  if (email.validity.valid) {
    error.innerHTML = ""
  }
  else {
    error.innerHTML = mailErrorMessage
  }
}, false)

password.addEventListener("input", (event) => {
  const error = password.nextElementSibling
  if (password.validity.valid) {
    error.innerHTML = ""
  }
  else {
    error.innerHTML = passwordErrorMessage
  }
}, false)

form.addEventListener("submit", (event) => {
  if (!userName.validity.valid) {
    const error = userName.nextElementSibling
    error.innerHTML = userErrorMessage
    event.preventDefault()
  }
  if (!email.validity.valid) {
    const error = email.nextElementSibling
    error.innerHTML = mailErrorMessage
    event.preventDefault()
  }
  if (!password.validity.valid) {
    const error = password.nextElementSibling
    error.innerHTML = passwordErrorMessage
    event.preventDefault()
  }
}, false)
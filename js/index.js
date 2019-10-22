const form = document.getElementsByTagName('form')[0]
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const error = document.querySelector('.error')

console.log(form)
console.log(error)

userName.addEventListener("input", (event) => {
  if (userName.validity.valid) {
    error.innerHTML = ""
  }
}, false)

form.addEventListener("submit", (event) => {
  if (!userName.validity.valid) {
    error.innerHTML = "Your username should only contain letters"
    event.preventDefault()
  }
}, false)
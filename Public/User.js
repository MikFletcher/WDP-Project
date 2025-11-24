let registerForm = document.getElementById("RegisterForm")
if(registerForm) registerForm.addEventListener('submit', register)

function register(e){
    e.preventDefault()

const User = {
    firstName: document.getElementById("Fname").value,
    lastName: document.getElementById("Lname").value,
    username: document.getElementById("user").value,
    password: document.getElementById("pass").value
}

console.log(User)
}

let loginForm = document.getElementById("LoginForm")
if(loginForm) loginForm.addEventListener('submit',login)

function login(e){
    e.preventDefault()

    const User = {
        username: document.getElementById("user").value,
        password: document.getElementById("pass").value
    }

console.log(User)
}



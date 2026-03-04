function login(event){

event.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "admin@gmail.com" && password === "1234"){

alert("Login Successful!");

window.location.href = "netflixclone.html";

}
else{

alert("Invalid Email or Password");

}

}
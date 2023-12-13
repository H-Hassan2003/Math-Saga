var signUp = document.getElementById("sign-up-btn");
var signIn = document.getElementById("sign-in-btn");

var formSignUp = document.getElementById("form-sign-up");
var formSignIn = document.getElementById("form-sign-in")

var signUpForm = document.getElementById("sign-up-form");
var signInForm = document.getElementById("sign-in-form")

var checkBox = document.getElementById("check");

signUp.addEventListener("click", function() {
    if (signInForm.style.display = "block") {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
    }
})

signUp.addEventListener("dblclick", function() {
    signUpForm.style.display = "none";
})

signIn.addEventListener('click', function() {
    if (signUpForm.style.display = "block") {
        signUpForm.style.display = "none";
        signInForm.style.display = "block";
    }
})

signIn.addEventListener("dblclick", function() {
    signInForm.style.display = "none";
})

formSignUp.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
})

formSignIn.addEventListener("click", function() {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
})


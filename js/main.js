$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

});

let true_or_false = 0;
let type_choice = '';

function submitStat(){
    if(true_or_false == 1){
        const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;

        alert(amount + security_code + type_choice);
    }
    /*const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;
    */
    //alert(amount + security_code);
    if(true_or_false == 0){
        alert('You have not chosen which type to bet on');
    }
}

function chooseWin(){
    type_choice = 'win';
    true_or_false = 1;
}

function chooseDraw(){
    type_choice = 'draw';
    true_or_false = 1;
}

function chooseLoss(){
    type_choice = 'loss';
    true_or_false = 1;
}



function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function login(){
    const login_username = document.getElementById("login_username").value;
    const login_pwd = document.getElementById("login_pwd").value;

    alert(login_username + login_pwd);
    var xhr = new XMLHttpRequest();
    var url = "http://yourserver.com/yourServlet";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
        username: login_username,
        pwd: login_pwd
    };

    xhr.send(JSON.stringify(data));
}

function signup(){
    const username = document.getElementById("signup_username").value;
    const email = document.getElementById("signup_email").value;
    const pwd = document.getElementById("signup_pwd").value;
    const check_pwd = document.getElementById("rpt_pwd").value;

    alert(username + email + pwd);

    var xhr = new XMLHttpRequest();
    var url = "http://yourserver.com/yourServlet";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
        username: username,
        email: email,
        pwd: pwd
    };

    xhr.send(JSON.stringify(data));

    /*if(pwd != check_pwd){
        alert('Please make sure that you type in the same password');
    }
    if(pwd == check_pwd){
        alert(username + email + pwd);
    }*/
}
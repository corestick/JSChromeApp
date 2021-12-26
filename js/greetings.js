const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#username");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();

	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginInput.value);

	paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

if (localStorage.getItem(USERNAME_KEY) === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
	paintGreetings();
}

function paintGreetings() {
	greeting.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

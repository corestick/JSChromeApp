const API_KEY = "0b1ab92116e0b348f292554a593d9750";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
	console.log(url);
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");

			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
			city.innerText = data.name;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

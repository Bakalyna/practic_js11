// import AerisWeather from '@aerisweather/javascript-sdk';
import { refs } from "./js/refs";

refs.form.addEventListener('submit', formSubmit);

async function formSubmit(event) {
    event.preventDefault();
}
import './vendor/routie.min.js';
import { getData } from './fetchData.js';
import { loadingState } from './loadingState.js';

export function handleRoutes() { 
    routie({
        'voeding': () => {
            getData('voeding');
        },
        'sport': () => {
            getData('sport');
        },
        'search/:onderwerp': onderwerp => {
            loadingState();
            getData(onderwerp);
        }
    })
};

const calcForm = document.querySelector("main form");
let personRecept = document.querySelector("main form input:nth-of-type(1)");
let personActual = document.querySelector("main form input:nth-of-type(2)");
let amount = document.querySelector("main form input:nth-of-type(3)");
let amountVak = document.querySelector("main form h2");
const form = document.querySelector('header form');

function calculate(e) {
    e.preventDefault();
    if (personRecept.value != "") {
        if (personActual.value != "") {
            if (amount.value != "") {
                let answer = amount.value / personRecept.value * personActual.value;
                amountVak.innerHTML = answer + "g";
            } else {
                amountVak.innerHTML = "Zorg dat je alle vakken in vult!"
            }
        } else {
            amountVak.innerHTML = "Zorg dat je alle vakken in vult!"
        }
    } else {
        amountVak.innerHTML = "Zorg dat je alle vakken in vult!"
    }
}

function searchField(event) {
    event.preventDefault();

    let searchValue = document.querySelector('header form input').value;
    routie(`search/${searchValue}`);
}

form.addEventListener('submit', searchField);
calcForm.addEventListener("submit", calculate)
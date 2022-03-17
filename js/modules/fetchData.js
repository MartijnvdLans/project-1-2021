import { renderData } from "./renderData.js";

export function getData(categorie) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = categorie;
    const key = '03b058d877ec4276bb63dd1c6e1f3768';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

    const config = {
    Authorization: `Bearer ${secret}`
    };

    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderData(data);
    })
    .catch(err => {
        routie(`error`);
        console.log(err);
    });
}
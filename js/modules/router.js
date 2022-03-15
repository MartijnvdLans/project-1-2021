import './vendor/routie.min.js';
import { getData } from './fetchData.js';

export function handleRoutes() { 
    routie({
        'voeding': () => {
            console.log('test');
            getData('voeding');
        },
        'sport': () => {
            console.log('test');
            getData('voeding');
        }
    })
};
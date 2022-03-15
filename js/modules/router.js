import './vendor/routie.min.js';
import { getData } from './fetchData.js';

export function handleRoutes() { 
    routie({
        'test': () => {
            console.log('test');
            getData();
        }
    })
};
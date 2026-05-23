import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55927319-d2860dd64df6f91fa3e520f31';


export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(response => response.data);
}
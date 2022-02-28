//api/users.js
import axios from 'axios';

const headers = {
    headers:{
        'Content-Type': 'application/json'
    }
}
const API = axios.create({ baseURL: 'http://127.0.0.1:5000/auth' });

API.interceptors.request.use((req) => {
    if(window.localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${ JSON.parse(window.localStorage.getItem('profile')).token }`;
    }

    return req;
});


//api requests
export const loginUsers = (logged) => API.post('/' , logged, headers);
export const signupUsers = (newUser) => API.post('/signup', newUser, headers);


import axios from 'axios'
// https://api.themoviedb.org/3/movie/now_playing?api_key=76419fdb04dcca38da1926103f6451ae&language=pt-BR

// BASE: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export default api;

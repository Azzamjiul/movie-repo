import movies from './movies.js';

class DataSource {

    static searchMovie1(keyword) {
        return new Promise ((resolve, reject) => {

            const filteredMovies = movies.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredMovies.length) {
                resolve(filteredMovies);
            } else {
                reject(`${keyword} is not found`);
            }
        })
    }

    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=a72dece0aba1030a69451991cd11ce5a&query=${keyword}`)
        // return fetch(`https://api.themoviedb.org/3/movie/${keyword}?api_key=a72dece0aba1030a69451991cd11ce5a`)
        // return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            // return responseJson;
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
   }
}

export default DataSource

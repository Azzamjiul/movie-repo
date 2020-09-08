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
       return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
           if(responseJson.teams) {
               return Promise.resolve(responseJson.teams);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
   }
}

export default DataSource

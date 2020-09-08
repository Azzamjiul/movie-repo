import '../component/app-bar.js'
import '../component/movie-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("app-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = () => {
        console.log(searchElement.value)
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main

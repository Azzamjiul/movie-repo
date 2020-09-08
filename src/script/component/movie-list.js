import './movie-item.js';

class MovieList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    renderError(message) {
       this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: auto auto auto auto;
                    grid-gap: 50px 100px;
                    padding: 10px;
                }
            </style>
        `;
        this._movies.forEach(
            movie => {
                const movieItemElement = document.createElement("movie-item");
                movieItemElement.movie = movie
                this.shadowDOM.appendChild(movieItemElement);
            }
        )
    }

}

customElements.define("movie-list", MovieList);

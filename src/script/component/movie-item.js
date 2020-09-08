class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render () {
        this.shadowDOM.innerHTML = `
            <style>

                :host {
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    display: inline-block;
                }

                .fan-art-club {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }

                .movie-info {
                    padding: 24px;
                }

                .movie-info > h2 {
                    font-weight: lighter;
                }

                .movie-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>

            <img class="fan-art-club" src="${this._movie.fanArt}" alt="Fan Art">
            <div class="movie-info">
                <h2>${this._movie.name}</h2>
                <p>${this._movie.description}</p>
            </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);

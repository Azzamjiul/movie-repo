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

                .movie-image {
                    width: 100%;
                    min-height: calc(150px * 1.5);
                    height: calc(150px * 1.5);
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
                    -webkit-line-clamp: 16; /* number of lines to show */
                }
            </style>

            <div class='movie'>
                <img class="movie-image" src="${this._movie.poster_path}" alt="Fan Art">
                <div class="movie-info">
                    <h2>${this._movie.original_title}</h2>
                    <p>${this._movie.overview}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);

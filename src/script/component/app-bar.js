class AppBar extends HTMLElement {

    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
       return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                   margin: 0;
                   padding: 0;
                }

                :host {
                   display: inline-block;
                   padding: 16px;
                   width: 100%;
                   background-color: #71c9ce;
                   color: white;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }

                .app-bar {
                    padding: 30px 25px;
                    vertical-align: middle;
                }

                .app-bar > .brand {
                    display: inline-block;
                    font-size: 24pt;
                    vertical-align: middle;
                }

                .search-container {
                    width: 300px;
                    max-width: 800px;
                    display: flex;
                    float: right;
                    border-radius: 5px;
                    margin-right: 40px;
                }

                .search-container > input {
                    width: 75%;
                    border: 0;
                    border-bottom: 1px solid #a6e3e9;
                    font-weight: bold;
                    border-radius: 5px;
                    padding: 5px 10px;
                }

                .search-container > input:focus {
                    outline: 0;
                    border-bottom: 2px solid #a6e3e9;
                }

                .search-container > input:focus::placeholder {
                    font-weight: bold;
                }

                .search-container >  input::placeholder {
                    color: #000;
                    font-weight: normal;
                }

                .search-container > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 10px;
                    background-color: #a6e3e9;
                    color: #000;
                    border: 0;
                    text-transform: uppercase;
                    border-radius: 5px;
                }
            </style>

            <div class='app-bar'>
                <div class="brand">Movie Database</div>
                <div class="search-container pull-right">
                    <input id="searchElement" type="search" placeholder="Search Movie">
                    <button id="searchButtonElement" type="submit">Search</button>
                </div>
            </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }

}

customElements.define('app-bar', AppBar);

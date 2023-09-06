class PokemonsListController {
    constructor(url, offset, limit) {
        this._urlApi = url;
        this._offset = offset;
        this._limit = limit;

        this._urlComplete = `${this._urlApi}?offset=${this.offset}&limit=${this._limit}`;
    }

    _updateUrl() {
        this._urlComplete = `${this._urlApi}?offset=${this.offset}&limit=${this._limit}`;
    }

    _addEventListenersToPokemons() {
        const pokeList = document.querySelector(".poke-list");
        if (pokeList.hasChildNodes()) {
            pokeList
            .childNodes
            .forEach(element => element.addEventListener("click", (event) => {
                const modalController = new ModalController();
                modalController.openModal(event);
            }));
        }
    }

    async addMorePokemons() {
        const listOfPokemons = await PokeApi.getAllPokemons(this._urlComplete);

        const pokemonsCardsView = new PokemonsCardsView("poke-list");
        pokemonsCardsView.update(listOfPokemons);

        this._addEventListenersToPokemons();
    }

    set offset(number) {
        this._offset = number;
        this._updateUrl();
    }

    get offset() {
        return this._offset;
    }
}
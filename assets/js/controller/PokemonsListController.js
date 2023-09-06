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

    async addMorePokemons() {
        const listOfPokemons = await PokeApi.getAllPokemons(this._urlComplete);
        const pokemonsCardsView = new PokemonsCardsView("poke-list");
        pokemonsCardsView.update(listOfPokemons);
    }

    set offset(number) {
        this._offset = number;
        this._updateUrl();
    }

    get offset() {
        return this._offset;
    }
}
class DetailedPokemon extends Pokemon {
    constructor(pokemon, pokemonUrl) {
        super(pokemon, pokemonUrl);
        this._stats = new Stats(pokemon.stats);
        this._weight = pokemon.weight;
        this._height = pokemon.height;
        console.log(pokemon.stats);
    }

    get stats() {
        return this._stats;
    }

    get weight() {
        return this._weight;
    }

    get height() {
        return this._height;
    }
}
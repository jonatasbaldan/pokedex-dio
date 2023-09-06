class DetailedPokemon extends Pokemon {
    constructor(pokemon, pokemonUrl) {
        super(pokemon, url)
        this._stats = new Stats(pokemon.stats)
        
    }
}
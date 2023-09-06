class PokeApi {
    static async getPokemon(pokemon) {
        const pokemonUrlFetched = await fetch(pokemon.url)
        const pokemonJson = await pokemonUrlFetched.json()
        return new Pokemon(pokemonJson, pokemon.url)
    }
    
    static async getAllPokemons(URL_COMPLETE) {
        const fetchUrl = await fetch(URL_COMPLETE)
        const jsonBody = await fetchUrl.json()
        return Promise.all(jsonBody.results.map(this.getPokemon))
    }
}
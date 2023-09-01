async function getPokemon(pokemon) {
    const pokemonUrlFetched = await fetch(pokemon.url)
    const pokemonJson = await pokemonUrlFetched.json()
    return new Pokemon(pokemonJson)

}

async function getAllPokemons(URL_COMPLETE) {
    const fetchUrl = await fetch(URL_COMPLETE)
    const jsonBody = await fetchUrl.json()
    return Promise.all(jsonBody.results.map(getPokemon))
}
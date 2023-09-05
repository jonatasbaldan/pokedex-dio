function pokemonToLi(pokemon) {
    console.log(pokemon.types)

    return `
    <li class="pokemon ${pokemon.type}">
    <p class="poke-number">${pokemon.id}</p>
    <p class="poke-name">${pokemon.name}</p>
    <span class="poke-status">
        <ol class="poke-tags">
        ${pokemon.types.map(type => `<li class="poke-tag">${type}</li>`).join("")}
        </ol>
        <img class="poke-img"
            src="${pokemon.image}"
            alt="${pokemon.name}">
    </span>
</li>`
}

const URL_API = "https://pokeapi.co/api/v2/pokemon"
let OFFSET = 0
let LIMIT = 5

let URL_COMPLETE = `${URL_API}?offset=${OFFSET}&limit=${LIMIT}`

const pokeListHtml = document.querySelector(".poke-list")

async function pokemonsToLi() {
    const listOfPoekshit = await getAllPokemons(URL_COMPLETE)
    pokeListHtml.innerHTML += listOfPoekshit.map(pokemonToLi).join("")
}

pokemonsToLi()

const btnLoadMore = document.querySelector(".btn-load-more")

btnLoadMore.addEventListener("click", () => {
    OFFSET += 5
    URL_COMPLETE = `${URL_API}?offset=${OFFSET}&limit=${LIMIT}`
    pokemonsToLi()
})
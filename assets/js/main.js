const URL_API = "https://pokeapi.co/api/v2/pokemon";
let OFFSET = 0;
let LIMIT = 5;

const pokemonsListController = new PokemonsListController(URL_API, OFFSET, LIMIT);
pokemonsListController.addMorePokemons();

const btnLoadMore = document.querySelector(".btn-load-more")

btnLoadMore.addEventListener("click", () => {
    OFFSET += 5;
    pokemonsListController.offset = OFFSET;
    console.log(pokemonsListController._offset);
    pokemonsListController.addMorePokemons()
})
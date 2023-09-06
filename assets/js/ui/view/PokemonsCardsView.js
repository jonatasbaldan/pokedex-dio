class PokemonsCardsView {

    constructor(selector) {
        this._element = document.querySelector(`.${selector}`);
    }

    update(pokemons) {
        this._element.innerHTML += pokemons.map(this.template).join("");
    }
    
    template(pokemon) {
        return `
        <li class="pokemon ${pokemon.type}">
        <p class="poke-number">#${pokemon.id}</p>
        <p class="poke-name">${pokemon.name}</p>
        <span class="poke-status">
            <ol class="poke-tags">
            ${pokemon.types.map(type => `<li class="poke-tag">${type}</li>`).join("")}
            </ol>
            <img class="poke-img"
                src="${pokemon.image}"
                alt="${pokemon.name}">
        </span>
    </li>`;
    }
}
class ModalView {
    constructor(element) {
        this._element = element;
    }

    update(pokemon) {
        this._element.innerHTML = this.template(pokemon);
    }

    template(pokemon) {
        return `
            <img src="${pokemon.image}" alt="${pokemon.name} image" class="modal-image">
            <p class="modal-name">${pokemon.name}</p>
            <ol class="modal-types-ol">
                ${pokemon.types.map(type => `<li class="modal-type-li">${type}</li>`).join("")}
            </ol>
            <ol class="modal-physical-ol">
                <li class ="modal-physical-li">
                <span class="unit-length-span">Metros</span><span class="length">${parseInt(pokemon.height) / 10}</span>
                </li>
                <li class ="modal-physical-li">
                <span class="unit-mass-span">Kg</span><span class="unit-span">${parseInt(pokemon.weight) / 10}</span>
                </li>
            </ol>
            <ol class "modal-stats-ol">
                <li class="modal-stat-li">
                    <span class="modal-stat-name-span">Hp: </span><span class="stat-number-span">${pokemon.stats.hp}</span>
                </li>
                <li class="modal-stat-li">
                    <span class="modal-stat-name-span">Attack: </span><span class="stat-number-span">${pokemon.stats.attack}</span>
                </li>
                <li class="modal-stat-li">
                    <span class="modal-stat-name-span">Defense: </span><span class="stat-number-span">${pokemon.stats.defense}</span>
                </li>
                <li class="modal-stat-li">
                    <span class="modal-stat-name-span">Special Attack: </span><span class="stat-number-span">${pokemon.stats.specialAttack}</span>
                </li>
                <li class="modal-stat-li">
                    <span class="modal-stat-name-span">Special Defense:</span><span class="stat-number-span">${pokemon.stats.specialDefense}</span>
                </li>
                <li class="modal-stat-li">
                    <span class="modal-stat-name-span">Speed: </span><span class="stat-number-span">${pokemon.stats.speed}</span>
                </li>
            </ol>`
    }
}
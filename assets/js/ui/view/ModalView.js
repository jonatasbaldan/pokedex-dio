class ModalView {
    constructor(selector) {
        this._element = document.querySelector(`.${modal-content}`);
    }

    template(pokemon) {
        return `
        <div class="poke-info">
            <img src="${pokemon.image}" alt="${pokemon.name} image" class="modal-image">
            <p class="modal-text">${pokemon.text}</p>
            <ol class="modal-types-ol">
            ${pokemon.types.map(type => `<li class"modal-type-li">${type}</li>`).join("")}
            </ol>
        </div>`
    }
}
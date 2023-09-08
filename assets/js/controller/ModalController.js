class ModalController {

    constructor() {
        this.$ = document.querySelector.bind(document);
        this._modal = this.$(".modal");
        this._span = this.$(".close");
        this._pokeInfo = this.$(".poke-info");
        this._currentElement = null;
        this._closeModal();
    }

    _closeOnIcon() {
        this._span.addEventListener("click", () => {
            this._modal.style.display = "none";
        })
    }

    _closeOnCLickOffScreen() {
        window.onclick = event => {
            if (event.target == this._modal) this._modal.style.display = "none";
        }
    }

    _closeModal() {
        this._closeOnIcon();
        this._closeOnCLickOffScreen();
    }

    openModal(event) {
        console.log(event);
        this._currentElement = event.currentTarget;
        this._modal.style.display = "block";
        this.addPokeInfo();
    }

    async getPokemon() {
        const pokeNumber = this._currentElement.querySelector(".poke-number");
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber.innerText.substring(1)}`;
        const pokemon = await PokeApi.getDetailedPokemon(url);
        return pokemon;
    }

    async addPokeInfo() {
        const modalView = new ModalView(this._pokeInfo);
        const pokemon = await this.getPokemon();
        console.log(pokemon);
        console.log(modalView.template(pokemon));
        modalView.update(pokemon);
    }
}
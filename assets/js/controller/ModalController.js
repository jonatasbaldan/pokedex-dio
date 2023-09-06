class ModalController {
    constructor() {
        this.$ = document.querySelector.bind(document);
        this._modal = this.$(".modal");
        this._span = this.$(".close");
        this._pokeInfo = this.$(".poke-info");
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
        const parent = event.srcElement.parentElement;
        console.log(parent);
        this._modal.style.display = "block";
    }

    displayPokeInfo() {

    }
}
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

        console.log(this._currentElement);
        this._modal.style.display = "block";
    }

    addPokeInfo() {
        
    }
}
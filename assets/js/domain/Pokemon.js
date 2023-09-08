class Pokemon {
    constructor(pokemon, url) {
        this._name = pokemon.name
        this._id = pokemon.id
        this._types = []

        for(let i = 0; i < pokemon.types.length; i++) {
            this.types.push(pokemon.types[i].type.name)
        }

        [this.type] = this.types
        this._url = url
        console.log(this.types)
        this._image = pokemon.sprites.other.home.front_default
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get url() {
        return this._url;
    }

    get image() {
        return this._image;
    }

    get types() {
        return this._types;
    }
}
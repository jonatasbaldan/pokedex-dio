class Pokemon {
    constructor(pokemon, url) {
        this._name = pokemon.name
        this._id = pokemon.id
        this._types = []

        this._stats = new Stats(pokemon.stats)

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

    get stats() {
        return this._stats;
    }
}

class Stats {
    constructor(stats) {
        Object.assign(this, {
            hp: stats[0].baste_stat,
            attack: stats[1].baste_stat,
            defense: stats[2].baste_stat,
            specialAttack: stats[3].baste_stat,
            specialDefense: stats[4].baste_stat,
            speed: stats[5].baste_stat})
    }
}
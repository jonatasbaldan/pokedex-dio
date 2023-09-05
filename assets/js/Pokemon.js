class Pokemon {
    name;
    id;
    types =[];
    type;
    image;
    url;

    constructor(pokemon, url) {
        
        this.name = pokemon.name
        this.id = pokemon.id

        for(let i = 0; i < pokemon.types.length; i++) {
            this.types.push(pokemon.types[i].type.name)
        }

        [this.type] = this.types
        this.url = url
        console.log(this.types)
        this.image = pokemon.sprites.other.home.front_default
    }
}
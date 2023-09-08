class Stats {
    constructor(stats) {
        Object.assign(this, {
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefense: stats[4].base_stat,
            speed: stats[5].base_stat})
    }
}
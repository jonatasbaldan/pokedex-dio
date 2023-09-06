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
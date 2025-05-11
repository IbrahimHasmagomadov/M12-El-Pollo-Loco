class Level {
    enemies;
    backgroundObject;
    clouds;
    level_end_x = 2200;


    constructor (enemies, clouds, backgroundObject) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
    }
}
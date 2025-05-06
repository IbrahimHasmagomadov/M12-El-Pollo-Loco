class Chicken extends MovableObject{

    height = 60;
    width = 60;
    y = 365;

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')

        this.x = 300 + Math.random() * 450;
    }
}
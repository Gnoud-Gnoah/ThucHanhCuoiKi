

class Scene1 extends Phaser.Scene{

    constructor(){
        super('Scene1')
    }

    preload(){
        this.load.image('button', 'MainGame/assets/1.png'),
        this.load.image('buttonPlay', 'MainGame/assets/2.png'),
        this.load.image('ballSmall', 'MainGame/assets/3.png'),
        this.load.image('ballBig', 'MainGame/assets/4.png'),
        this.load.image('bearSmall', 'MainGame/assets/5.png'),
        this.load.image('bearBig', 'MainGame/assets/6.png'),
        this.load.image('bearBlueSmall', 'MainGame/assets/7.png'),
        this.load.image('bearBlueBig', 'MainGame/assets/8.png'),
        this.load.image('gatoBig1', 'MainGame/assets/9.png'),
        this.load.image('gatoSmall', 'MainGame/assets/10.png'),
        this.load.image('gatoBig2', 'MainGame/assets/11.png'),
        this.load.image('fruitSmall', 'MainGame/assets/12.png'),
        this.load.image('fruitBig', 'MainGame/assets/13.png'),
        this.load.image('carSmall', 'MainGame/assets/14.png'),
        this.load.image('carBig', 'MainGame/assets/15.png')
    }

    create(){
        this.background = this.add.image(0, 0, "button").setOrigin(0, 0);
    }

    update(){

    }
}
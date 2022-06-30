import Button from "../js/button.js";
export class Preloads extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Preloads");
    }



    preload(){

        //escena
        this.load.image("sky", "/assets/images/phaser/sky.png");
        this.load.image("base", "/assets/images/phaser/base.png");
        this.load.image("plataforma", "/assets/images/phaser/plataforma.png");
        this.load.image("plataforma2", "/assets/images/phaser/plataforma2.png");
        this.load.image("plataforma3", "/assets/images/phaser/plataforma3.png");
        //objetos
        this.load.image("anillo", "/assets/images/phaser/anillo.png");
        this.load.image("moneda", "/assets/images/phaser/moneda.png");
        this.load.image("bomb", "/assets/images/phaser/bomb.png");
        //personaje
        this.load.spritesheet('dude', '../assets/images/phaser/dude.png', { frameWidth: 32, frameHeight: 48 });


    }

    create(){

        this.scene.start('MainMenu')
    }
}
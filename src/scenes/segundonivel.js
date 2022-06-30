import Button from "../js/button.js";

export class SegundoNivel extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SegundoNivel");
    }
  
    create() {

      
      var botonrespuesta3 = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'GameOver',
      this, () => {
       
        this.scene.start('GameOver')
       
     });

    };
  

    
  }
import Button from "../js/button.js";
export class GameOver extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("GameOver");
    }



    create(){

      var botonjugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Jugar de nuevo')
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
     
        this.scene.start('Nivel1')
      
      })

    

    }
}
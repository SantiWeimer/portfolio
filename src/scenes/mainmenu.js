import Button from "../js/button.js";
export class MainMenu extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("MainMenu");
    }



    create(){

      var botonjugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Jugar')
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
     
        this.scene.start('PrimerNivel')
      
      })

    }
}

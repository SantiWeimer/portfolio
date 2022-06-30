import Button from "../js/button.js";
export class GameOver extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("GameOver");
    }



    create(){

      var botonrespuesta3 = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Jugar de nuevo',
        this, () => {
         
          this.scene.start('PrimerNivel')
         
       });
    

    }
}
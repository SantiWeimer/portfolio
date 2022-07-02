import Button from "../js/button.js";
export class MainMenu extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("MainMenu");
    }



    create(){

      musica = this.sound.add('musica');
      musica.play()

      var botonrespuesta3 = new Button(this.cameras.main.centerX, this.cameras.main.centerY, 'Jugar',
      this, () => {
       
        this.scene.start('PrimerNivel')
       
     });
    }
}

import Button from "../js/button.js";

export class PrimerNivel extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("PrimerNivel");
    }
 
    
  
    create() {

var player;
var moneda;
var stars;
var redstar;
var bombs;
var platforms;
var cursors;
var score = 0;
var nivel = 1;
var gameOver = false;
var scoreText;
var nivelText;
var gameovertext;
var gameovertext2;
var velocidadX = -160;
var velocidadY = 160;
var velbombX = -100;
var velbombY = 100;
var musicafondo;
var sonidomoneda;


    

    //sonidos

    musicafondo = this.sound.add('musicafondo');
    musicafondo.setVolume(0.3)
    musicafondo.play()
    sonidomoneda = this.sound.add('sonidomoneda');

    //tilemap

    const map = this.make.tilemap({ key: "map1" });
    
    const sky = map.addTilesetImage("sky, skyTile");
    const base = map.addTilesetImage("base", "baseTile");
    const plataforma1 = map.addTilesetImage("plataforma", "plataforma1Tile");
    const plataforma2 = map.addTilesetImage("plataforma2", "plataforma2Tile");
    const plataforma3 = map.addTilesetImage("plataforma3", "plataforma3Tile");
    
  
    const skyLayer = map.createLayer("skymapa", sky, 0, 0);
    const baseLayer = map.createLayer("basemapa", base, 0, 0);
    const plataforma1Layer = map.createLayer("plataforma1mapa", plataforma1, 0, 0);
    const plataforma2Layer = map.createLayer("plataforma2mapa", plataforma2, 0, 0);
    const plataforma3Layer = map.createLayer("plataforma3mapa", plataforma3, 0, 0);
    //objetos
    const playerLayer = map.getObjectLayer("player");
    const monedaLayer = map.getObjectLayer("moneda");
    const anilloLayer = map.getObjectLayer("anillo");


    const spawnPlayer = map.findObject("player",
    (obj) => obj.name === "dude");

    console.log(spawnPlayer)
    const spawnAnillo = map.findObject("anillo",
    (obj) => obj.name === "anillo");

    //personaje
   
    player = this.physics.add.sprite(spawnPlayer.x, spawnPlayer.y, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

     /*
    baseLayer.setCollisionByProperty({ collides: true });
    plataforma1Layer.setCollisionByProperty({ collides: true });
    plataforma2Layer.setCollisionByProperty({ collides: true });
    plataforma3Layer.setCollisionByProperty({ collides: true });
    */

 /*
    //fondo
    this.add.image(400, 300, 'sky');

    
    //plataformas

    platforms = this.physics.add.staticGroup();

  
    platforms.create(400, 568, 'base').setScale(2).refreshBody();

    platforms.create(70, 440, 'plataforma2');
    platforms.create(700, 450, 'plataforma');

    
    platforms.create(340, 320, 'plataforma2');
    platforms.create(610, 300, 'plataforma3');


    platforms.create(500, 130, 'plataforma3');
    
    platforms.create(30, 220, 'plataforma3');
    platforms.create(850, 200, 'plataforma2');

    platforms.create(30, 100, 'plataforma3');

*/

    //personaje
   
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown)
    {
        
        player.setVelocityX(velocidadX);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        
        player.setVelocityX(velocidadY);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }



    //estrellas
    stars = this.physics.add.group({
        key: 'moneda',
        repeat: 10,
        setXY: { x: 100, y: 0, stepX: 68 }
    });

    stars.children.iterate(function (child) {

        
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });



    //bombas

    bombs = this.physics.add.group();



    //estrella roja

    redstar = this.physics.add.group({
        key: "anillo"
        
        
        
    });



    redstar.children.iterate(function (child) {

        
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });


    //texto
    scoreText = this.add.text(560, 16, 'Puntos: 0', { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px', fill: '#D9120C' });
    nivelText = this.add.text(16, 16, 'Nivel: 1', { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px', fill: '#D9120C' });


    //colisiones
    
    this.physics.add.collider(player, baseLayer);
    this.physics.add.collider(player, plataforma1Layer);
    this.physics.add.collider(player, plataforma2Layer);
    this.physics.add.collider(player, plataforma3Layer);

    this.physics.add.collider(stars, baseLayer);
    this.physics.add.collider(stars, plataforma1Layer);
    this.physics.add.collider(stars, plataforma2Layer);
    this.physics.add.collider(stars, plataforma3Layer);

    this.physics.add.collider(redstar, baseLayer);
    this.physics.add.collider(redstar, plataforma1Layer);
    this.physics.add.collider(redstar, plataforma2Layer);
    this.physics.add.collider(redstar, plataforma3Layer);

    this.physics.add.collider(bombs, baseLayer);
    this.physics.add.collider(bombs, plataforma1Layer);
    this.physics.add.collider(bombs, plataforma2Layer);
    this.physics.add.collider(bombs, plataforma3Layer);

    
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.overlap(player, redstar, collectStar2, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);



    
    //funcion estrella roja

 function collectStar2 (player, redstar)
 {
     redstar.disableBody(true, true);
 
     score += 50;
     scoreText.setText('Puntos: ' + score);
     moneda.play()
 
 
     //velocidad personaje al agarrar estrella
 
     velocidadY = velocidadY + 20;
     velocidadX = velocidadX - 20;
 
     
 
 }
 
 //funcion estrella
 
 
 
 
 function collectStar (player, star)
 {
     star.disableBody(true, true);
 
     
     score += 10;
     scoreText.setText('Puntos: ' + score);
     moneda.play()
     
     
     velbombX = velbombX - 5;
     velbombY = velbombY + 5;
 
     if (stars.countActive(true) === 0 && (redstar.countActive(true) === 0) || stars.countActive(true) === 0)
     {
         
         nivel += 1;
         nivelText.setText('Nivel: ' + nivel)
         
         stars.children.iterate(function (child) {
 
             child.enableBody(true, child.x, 0, true, true);
         
             
 
         });
 
         redstar.children.iterate(function (child) {
 
             child.enableBody(true, child.x, 0, true, true);
         
             
 
         });
 
         var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
     
         var bomb = bombs.create(x, 16, 'bomb');
         bomb.setBounce(1);
         bomb.setCollideWorldBounds(true);
         bomb.setVelocityX(velbombX)
         bomb.setVelocityY(velbombY);
         bomb.allowGravity = false;
 
         
 
     }
 
 
     
 }
 
 function hitBomb (player, bomb)
 
 {
     this.physics.pause();
 
     player.setTint(0xff0000);
 
     player.anims.play('turn');
 
     gameOver = true;
     
    
 }


 //gameover

 if (gameOver)
    {
        
        this.scene.start('GameOver')

    }

  
}

}

 



      
   
  


class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(80, 10)
            .setStyle({ 
                backgroundColor: '#C2A26A', 
                fontSize: '36px', 
                fill: '#2B2B2B', 
                fontFamily: 'Times',

            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#000', backgroundColor: '#C89B4B' }))
            .on('pointerout', () => button.setStyle({ fill: '#2B2B2B', backgroundColor: '#C2A26A' }));
    }
}

export default Button;
class Knife extends Phaser.Sprite {
    constructor(game, x, y, img, type) {
        super(game, x, y, img)
        this.scale.setTo(1, 1)
        this.anchor.setTo(0.5, 0.5)

        game.physics.arcade.enable(this)

        this.body.allowGravity = false
        this.body.immovable = true
    }
} 
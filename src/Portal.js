class Portal extends Phaser.Sprite {
    constructor(game, x, y, img, type) {
        super(game, x, y, img)
        // this.scale.setTo(5, 2.5)
        this.scale.setTo(5, 5)
        this.anchor.setTo(0.5, 0.5)

        game.physics.arcade.enable(this)

        // this.body.isCircle = true
        this.body.allowGravity = false
        this.body.immovable = true
        this.animations.play('portal', 1, true)
    }
} 
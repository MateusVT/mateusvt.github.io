class PlataformSide extends Phaser.Sprite {
    constructor(game, x, y, img, type) {
        super(game, x, y, img)
        this.scale.setTo(4, 4)
        this.anchor.setTo(0.5, 0.5)

        game.physics.arcade.enable(this)
        this.hitLeft = false
        this.hitRight = false
        this.body.allowGravity = false
        this.body.immovable = true
        this.body.collideWorldBounds = true;
        // this.body.friction = 10
        this.body.acceleration.x = -100


    }

    moveSide() {

        if (this.hitLeft) {
            this.body.velocity.x = -100
        } else if (this.Right) {
            this.body.velocity.x = +100
        }
    }

    update() {
        this.moveSide()
    }
} 
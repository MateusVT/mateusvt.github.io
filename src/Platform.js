class Plataform extends Phaser.Sprite {
    constructor(game, x, y, img, type) {
        super(game, x, y, img)
        this.scale.setTo(4, 4)
        this.anchor.setTo(0.5, 0.5)

        game.physics.arcade.enable(this)
        this.hitGround = false
        this.hitSky = false
        // this.body.isCircle = true
        this.body.allowGravity = false
        this.body.immovable = true
        this.body.collideWorldBounds = true;
        // this.body.friction = 10
        // this.body.bounce.setTo(1, 1);
        this.body.velocity.y = 200


    }

    moveUpDown() {

        if (this.hitGround) {
            this.body.velocity.y = -200
        } else if (this.hitSky) {
            this.body.velocity.y = +200
        }
    }


    update() {
        this.moveUpDown()
    }
} 
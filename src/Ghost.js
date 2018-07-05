class Ghost extends Phaser.Sprite {
    constructor(game, x, y, img) {
        super(game, x, y, img)
        this.anchor.set(0.5, 0.5)

        this.animations.add('fly', [0, 1, 2], 8, true)
        this.animations.play('fly')

        this.game.physics.enable(this)
        // this.body.gravity.y = 0
        // this.body.setSize(43, 30, 3, 4)
        // this.scale.setTo(3.5, 3.5)
        this.body.allowGravity = false
        this.body.immovable = true
        this.body.collideWorldBounds = true
        this.body.velocity.x = -200
        this.hitWall = 1
        // this.varAux = 0
    }

    die() {
        // this.body.velocity.y = -300
        this.body.enable = false
    }
    moveSide() {

        // if (this.hitLeft) {
        //     this.body.velocity.x = -100
        // } else if (this.Right) {
        //     this.body.velocity.x = +100
        // }

        if (this.hitWall == 1) {
            this.body.velocity.x = -200
        } else if (this.hitWall == 2) {
            this.body.velocity.x = +200
        }
    }

    update() {
        this.moveSide()
    }
    render() {
    }
} 
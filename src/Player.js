class Player extends Phaser.Sprite {

    constructor(game, x, y, img, tint, bullets, keys) {
        super(game, x, y, img)

        game.physics.arcade.enable(this)
        // this.health = config.PLAYER_HEALTH
        //this.body.isCircle = true
        this.scale.setTo(1.5, 1.5)
        // this.body.setSize(36, 36)
        this.anchor.setTo(0.4, 0.4)
        // this.body.maxVelocity.x = config.PLAYER_MAX_VELOCITY
        // this.body.maxVelocity.y = config.PLAYER_MAX_VELOCITY_JUMP
        // this.body.position.x = 0
        // this.body.position.y = 0

        this.body.collideWorldBounds = true
        this.body.allowRotation = false
        // this.body.drag.set(config.PLAYER_DRAG)
        // this.body.mass = config.MASS

        // octopus = game.add.sprite(330, 100, 'seacreatures');
        // this.animations.add('walkRight', Phaser.Animation.generateFrameNames('jason', 0, 24, '', 4), 30, true);
        // octopus.animations.play('swim');

        // this.animations.add('walkRight', ["19", "9", "10", "11", "12", "13"], 10);
        // this.animations.add('walkLeft', ["20", "18", "17", "16", "15", "14"], 10);
        // this.animations.add('stay', ["5", "6", "3", "1"], 6);
        // this.animations.add('jump', ["29", "27", "21", "23", "25", "33", "35", "30"], 10);


        this.animations.add('walkRight', ["9", "19", "20", "10", "11", "17", "12", "21"], 10);
        this.animations.add('walkLeft', ["22", "13", "18", "14", "15", "23", "24", "16"], 10);
        this.animations.add('stay', ["1"], 10);
        // this.animations.add('jump', ["29", "27", "21", "23", "25", "33", "35", "30"], 10);


        this.keys = {
            left: game.input.keyboard.addKey(keys.left),
            right: game.input.keyboard.addKey(keys.right),
            up: game.input.keyboard.addKey(keys.up),
            down: game.input.keyboard.addKey(keys.down),
            fire: game.input.keyboard.addKey(keys.fire)
        }

        this.frame = 0
        // this.score = 0
        this.jumpAllow = true
        // this.bullets = bullets

    }



    movePerson() {

        if (this.keys.left.isDown) {
            this.body.velocity.x = -config.PLAYER_VELOCITY_X
            this.body.res
            this.animations.play('walkLeft');

        }
        else if (this.keys.right.isDown) {
            this.body.velocity.x = +config.PLAYER_VELOCITY_X
            this.animations.play('walkRight');
        }

        else {
            this.body.velocity.x = 0
            // this.animations.stop()
            this.animations.play('stay')
        }
    }

    jump() {
        if (this.jumpAllow) {
            this.animations.play('jump')
            this.body.velocity.y += -config.PLAYER_MAX_JUMP
        }
        this.jumpAllow = false
    }

    update() {
        this.movePerson()
    }
}



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
        this.jumpAllow = false
        this.inPlataform = false
        this.lastKey = null


        this.animations.add('walkRight', ["9", "19", "20", "10", "11", "17", "12", "21"], 11);
        this.animations.add('walkLeft', ["22", "13", "18", "14", "15", "23", "24", "16"], 11);
        this.animations.add('attackRight', ["43", "39", "41", "47", "45"], 11);
        // this.animations.add('attackLeft', ["46", "48", "42", "40", "44"], 11);
        this.animations.add('attackLeft', ["44", "40", "42", "48", "46"], 11);
        // this.animations.add('stayRight', ["4", "3",], 5);
        // this.animations.add('stayRight', ["4", "3",], 5);
        this.animations.add('stay', ["1"], 5);
        this.animations.add('downRight', ["34", "37"], 5);
        this.animations.add('downLeft', ["35", "38"], 5);
        this.animations.add('jump', ["33", "27", "25", "29", "31", "37", "34", "63", "61"], 5);


        this.keys = {
            left: game.input.keyboard.addKey(keys.left),
            right: game.input.keyboard.addKey(keys.right),
            up: game.input.keyboard.addKey(keys.up),
            attack: game.input.keyboard.addKey(keys.attack),
            a: game.input.keyboard.addKey(keys.a),
            w: game.input.keyboard.addKey(keys.w),
            d: game.input.keyboard.addKey(keys.d),
            space: game.input.keyboard.addKey(keys.space)
            // down: game.input.keyboard.addKey(keys.down)// DOWN?
        }

        this.frame = 0
        // this.score = 0
        this.jumpAllow = true
        // this.bullets = bullets

    }



    movePerson() {

        if (this.keys.left.isDown || this.keys.a.isDown) {
            this.body.velocity.x = -config.PLAYER_VELOCITY_X
            // this.body.res
            this.lastKey = 1
            this.animations.play('walkLeft');

        }
        else if (this.keys.right.isDown || this.keys.d.isDown) {
            this.body.velocity.x = +config.PLAYER_VELOCITY_X
            this.lastKey = 2
            this.animations.play('walkRight');
        }
        // else if (this.keys.right.isDown || this.keys.w.isDown) {
        //     this.body.velocity.y += -config.PLAYER_MAX_JUMP
        // }

        else if (this.keys.w.isDown) {
            if (this.jumpAllow) {
                this.lastKey = this.upPressed
                this.body.velocity.y += -config.PLAYER_MAX_JUMP
                this.animations.play('jump')
            }

            this.jumpAllow = false
        }
        else {
            this.body.velocity.x = 0
            // if (this.lastKey = 1) {
            // console.log("oiL")
            this.animations.play('stay')
            // }
            // else if (this.lastKey = 2) {
            //     console.log("oiR")
            //     this.animations.play('stayRight')

            // }
            // if(this.lastKey=this.upPressed)
        }
    }

    attack() {
        if (this.keys.attack.isDown) {
            // this.body.velocity.x = -config.PLAYER_VELOCITY_X
            // // this.body.res
            // this.lastKey = 1
            // this.animations.play('attackRight', null, false, true);

        }

    }


    jump() {
        if (this.jumpAllow) {
            this.body.velocity.y += -config.PLAYER_MAX_JUMP
            this.animations.play('jump')
        }
        this.jumpAllow = false
    }

    update() {
        this.movePerson()
        this.attack()
    }
}

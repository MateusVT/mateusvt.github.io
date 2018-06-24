'use strict'
var groupHearts
class GameState extends BaseState {

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.game.physics.arcade.gravity.y = config.GRAVITY

        let backGroundWidth = this.game.cache.getImage('level1 background').width
        let backGroundHeight = this.game.cache.getImage('level1 background').height
        this.backGround = this.game.add.tileSprite(0, 0, backGroundWidth, backGroundHeight, 'level1 background')
        this.backGround.scale.x = this.game.width / this.backGround.width
        this.backGround.scale.y = this.game.height / this.backGround.height
        this.backGround.fixedToCamera = true

        // groupHearts = this.game.add.group()
        // groupHearts.enableBody = true
        // groupHearts.physicsBodyType = Phaser.Physics.ARCADE
        // groupHearts.createMultiple(8, 'heart')
        // groupHearts.animations.add('rotate', [0, 1, 2, 3, 4, 5], 6, true); // 6fps, looped
        // groupHearts.animations.play('rotate');
        // this.groupHearts.setAll('anchor.x', 0.5)
        // this.groupHearts.setAll('anchor.y', 0.5)


        this.createTileMap()


        this.player1 = new Player(this.game, 100, 100,
            'jason', 0xff0000, null, {
                left: Phaser.Keyboard.LEFT,
                right: Phaser.Keyboard.RIGHT,
                up: Phaser.Keyboard.UP,
                down: Phaser.Keyboard.DOWN,
                fire: Phaser.Keyboard.UP
            })

        // this.flyPlataform = this.game.add.sprite(100,this.game.height + 150, 'flying plataform')
        // this.flyPlataform.enableBody = true;
        // this.flyPlataform.immovable
        // this.game.physics.enable(this.flyPlataform, Phaser.Physics.ARCADE);
        // this.flyPlataform.gravity = false;

        // this.flyPlataform.physicsBodyType = Phaser.Physics.ARCADE
        // this.game.physics.arcade.enable(this.flyPlataform)
        // this.flyPlataform.body.collideWorldBounds = true
        this.player1.position.x = -this.game.width
        this.player1.position.y = this.game.height + 170

        this.game.add.existing(this.player1)
        // this.game.add.existing(this.flyPlataform)
        this.game.camera.follow(this.player1, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)

        // this.hud = {
        //     text1: this.createText(this.game.width * 1 / 9, 50, 'PLAYER 1: 20'),
        //     score: this.createText(this.game.width - 90, 50, 'SCORE: 0')
        // }

        // this.updateHud()

        let fps = new FramesPerSecond(this.game, this.game.width / 2, 50)
        this.game.add.existing(fps)

        let fullScreenButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE)
        fullScreenButton.onDown.add(this.toggleFullScreen, this)

        this.initFullScreenButtons()

        let vpad = new VirtualGamepad(this.game)

        this.game.add.existing(vpad)

        let jumpButton = vpad.addActionButton(
            this.game.width - 120, this.game.height - 50, 'button_action', () => this.player1.jump())

        let attackButton = vpad.addAttackButton(
            this.game.width - 50, this.game.height - 50, 'button_attack', () => this.player1.jump())

        let dpadButton = vpad.addDPadButton(100, this.game.height - 50, 'button_move', {
            leftPressed: () => this.player1.keys.left.isDown = true,
            leftReleased: () => this.player1.keys.left.isDown = false,
            rightPressed: () => this.player1.keys.right.isDown = true,
            rightReleased: () => this.player1.keys.right.isDown = false
        })
    }


    iniciarHearts() {
        this.obstaclesHeart.forEach(function (exp) {
            let anim = exp.animations.add('full', null, 20, true) // null -> array of frames
            exp.scale.setTo(0.5, 0.5)
            exp.anchor.setTo(0.5, 0.5)
            exp.animations.play('full')
            anim.onComplete.add(() => exp.kill())
        })
    }

    // flyingPlataformMove() {

    //     // this.flyPlataform.body.x = this.flyPlataform.body.x+2;
    //     // this.flyPlataform.body.y = this.flyPlataform.body.y-2;


    // }


    createTileMap() {
        this.map = this.game.add.tilemap('level1 map')
        this.map.addTilesetImage('level1 tileset terrain')
        this.map.addTilesetImage('horrortileset')

        // this.map.objects["Flying Platform"][0] = this.game.add.sprite(100,this.game.height + 150, 'flying plataform')

        this.mapLayer = this.map.createLayer('Tile Layer Background')
        this.mapLayer = this.map.createLayer('Tile Layer 1')
        // this.mapLayer = this.map.createLayer('Tile Layer 2')
        // this.mapLayer_DamageSpike = this.map.createLayer('Tile Layer DamageSpike')        


        this.map.setCollisionBetween(0, 300, true, 'Tile Layer 1')
        // this.map.setCollisionBetween(0, 300, true, 'Tile Layer DamageSpike')    

        // this.obstaclesSaw = this.game.add.group()
        this.obstaclesHeart = this.game.add.group()
        // this.map.createFromObjects('Object Layer DamageSaw', 215,'damage_saw', 0, true, true, this.obstaclesSaw, Saw)
        // this.map.createFromObjects('Object Layer Hearts', ,'Coin', 0, true, true, this.obstaclesHeart, Heart)
        this.map.createFromObjects('Object Layer Hearts', 111, 'heart', 0, true, true, this.obstaclesHeart, Heart)

        this.iniciarHearts()

        this.mapLayer.resizeWorld()
    }

    toggleFullScreen() {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL
        if (this.game.scale.isFullScreen) {
            this.game.scale.stopFullScreen()
        } else {
            this.game.scale.startFullScreen(false)
        }
    }

    update() {
        this.backGround.tilePosition.x -= 0.5
        // this.flyingPlataformMove();

        // colisoes com mapa
        this.game.physics.arcade.collide(this.player1, this.mapLayer, this.setAllowJump)
        this.game.physics.arcade.collide(this.player1, this.obstaclesHeart, this.hitHeart, null, this);

        // //colisao com espinhos
        // this.game.physics.arcade.collide(this.player1, this.mapLayer_DamageSpike, this.hitSpikes, null, this)

        // colisao com serras
        // this.game.physics.arcade.collide(this.player1, this.obstaclesSaw, this.hitSaw, null, this)

        // //colisao com coins 
        // this.game.physics.arcade.collide(this.player1, this.obstaclesCoin, this.hitCoin, null, this)

        this.updateHud()
    }


    setAllowJump(sprite, tile) {
        sprite.jumpAllow = true
    }

    hitHeart(sprite, tile) {
        sprite.score += config.SCORE_COIN
        tile.kill()
    }

    hitSpikes(sprite, tile) {
        sprite.alpha = 0.5
        tile.alpha = 0
        // força atualizaçao dos tiles no map
        this.mapLayer.dirty = true
    }

    hitSaw(player, obstacle) {
        if (player.alive) {
            player.damage(1)
            if (!player.alive)
                this.game.camera.follow(null)

            this.updateHud()
            this.game.camera.shake(0.01, 200);

            // empurra jogador na direcao oposta a da colisao
            let forceDirection = this.game.physics.arcade.angleBetween(obstacle, player)
            this.game.physics.arcade.velocityFromRotation(forceDirection, 600, player.body.velocity)
        }
    }

    updateHud() {
        // this.hud.text1.text = `PLAYER 1: ${this.player1.health}`
        // this.hud.score.text = `SCORE: ${this.player1.score}`
    }

    render() {

        // this.obstaclesSaw.forEach(function(obj){ 
        //     this.game.debug.body(obj)
        // },this)

        // this.obstaclesCoin.forEach(function(obj){
        //     this.game.debug.body(obj)
        // },this)

        // this.game.debug.body(this.player1)
        // game.debug.body(player2)
    }
}
'use strict'
class GameState extends BaseState {

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.game.physics.arcade.gravity.y = config.GRAVITY
        this.timer = this.game.time.create(false);
        this.timerScore = this.game.time.create(false);


        let backGroundWidth = this.game.cache.getImage(`level${config.LEVEL} background`).width

        let backGroundHeight = this.game.cache.getImage(`level${config.LEVEL} background`).height
        this.backGround = this.game.add.tileSprite(0, 0, backGroundWidth, backGroundHeight, `level${config.LEVEL} background`)
        this.backGround.scale.x = this.game.width / this.backGround.width
        this.backGround.scale.y = this.game.height / this.backGround.height
        this.backGround.fixedToCamera = true

        this.createTileMap()
        this.createAudios()
        this.playThemeSong()

        this.scoreTime = 120;

        this.timerIsRunning = false

        this.fog = this.game.add.tileSprite(0, 0, 6400, 960, `fog${config.LEVEL}`)
        this.fog.tileScale.setTo(5, 5)
        this.fog.alpha = 0.3

        this.player1 = new Player(this.game, 100, 100,
            'jason', 0xff0000, null, {
                left: Phaser.Keyboard.LEFT,
                right: Phaser.Keyboard.RIGHT,
                up: Phaser.Keyboard.UP,
                attack: Phaser.Keyboard.SPACEBAR,
                a: Phaser.Keyboard.A,
                w: Phaser.Keyboard.W,
                d: Phaser.Keyboard.D,
                space: Phaser.Keyboard.SPACEBAR,
            })



        if (config.LEVEL == 4) {
            this.player1.position.x = -this.game.width
            this.player1.position.y = this.game.height + 1300
        }
        else {
            this.player1.position.x = -this.game.width
            this.player1.position.y = this.game.height + 170
        }

        this.game.add.existing(this.player1)
        this.game.camera.follow(this.player1, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)

        this.hud = {
            text1: this.createText(this.game.width * 1 / 20, 40, 'PLAYER 1'),
            score: this.createText(this.game.width - 90, 60, 'SCORE: 0'),
            attackHud: this.createText(this.game.width * 1 / 20 + 8, 60, 'ATTACK: 1'),
            timerScore: this.createText(this.game.width - 90, 40, 'Timer: 1')

        }

        this.updateHud()

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

    iniciaAnimations() {

        try {
            this.obstaclesPortal.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                // exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }
        try {
            this.obstaclesHeart.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }
        try {
            this.obstaclesWater.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }
        try {
            this.obstaclesLava.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }
        try {
            this.obstaclesPoison.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }
        try {
            this.obstaclesLama.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }
        try {
            this.obstaclesGhost.forEach(function (exp) {
                let anim = exp.animations.add('full', null, 10, true) // null -> array of frames
                exp.scale.setTo(0.5, 0.5)
                exp.anchor.setTo(0.5, 0.5)
                exp.animations.play('full')
                anim.onComplete.add(() => exp.kill())
            })
        } catch (error) {

        }

    }





    createTileMap() {
        this.map = this.game.add.tilemap(`level${config.LEVEL}`)// morre aqui
        // this.map = this.game.add.tilemap('level1')

        if (config.LEVEL == 1) {
            this.map.addTilesetImage('level 1 map')
            this.mapLayer = this.map.createLayer('Background Layer')
            this.mapLayer = this.map.createLayer('Map Layer')
            this.map.setCollisionBetween(0, 300, true, 'Map Layer')

            this.obstaclesHeart = this.game.add.group()
            this.obstaclesKnife = this.game.add.group()
            this.obstaclesJasonMask = this.game.add.group()
            this.obstaclesPortal = this.game.add.group()
            this.obstaclesPlataformUpDown = this.game.add.group()
            this.obstaclesInvisibleWall = this.game.add.group()
            this.obstaclesSpike = this.game.add.group()
            this.obstaclesGhost = this.game.add.group()

            this.map.createFromObjects('Object Layer', 155, 'heart', 0, true, true, this.obstaclesHeart, Heart)
            this.map.createFromObjects('Object Layer', 156, 'jasonMask', 0, true, true, this.obstaclesJasonMask, JasonMask)
            this.map.createFromObjects('Object Layer', 157, 'flyingPlataform', 0, true, true, this.obstaclesPlataformUpDown, Plataform)
            this.map.createFromObjects('Object Layer', 158, 'spike', 0, true, true, this.obstaclesSpike, Spike)
            this.map.createFromObjects('Object Layer', 159, 'invisibleWall', 0, true, true, this.obstaclesInvisibleWall, InvisibleWall)
            this.map.createFromObjects('Object Layer', 160, 'portal', 0, true, true, this.obstaclesPortal, Portal)
            this.map.createFromObjects('Object Layer', 162, 'knife', 0, true, true, this.obstaclesKnife, Knife)
            this.map.createFromObjects('Object Layer', 163, 'ghost1', 0, true, true, this.obstaclesGhost, Ghost)
            // this.map.createFromObjects('Object Layer', 161, 'lama', 0, true, true, this.obstacleTerrenos, Terrenos)

        }
        else if (config.LEVEL == 2) {

            this.map.addTilesetImage('level 2 tileset')
            this.mapLayer = this.map.createLayer('Background Layer')
            this.mapLayer = this.map.createLayer('Map Layer')
            this.map.setCollisionBetween(1, 300, true, 'Map Layer')

            this.obstaclesPoison = this.game.add.group()
            this.obstaclesSpike = this.game.add.group()
            this.obstaclesHeart = this.game.add.group()
            this.obstaclesJasonMask = this.game.add.group()
            this.obstaclesPortal = this.game.add.group()
            this.obstaclesPortal = this.game.add.group()
            this.obstaclesPlataformSide = this.game.add.group()
            this.obstaclesPlataformUpDown = this.game.add.group()
            this.obstaclesInvisibleWall = this.game.add.group()
            this.obstaclesGhost = this.game.add.group()
            
            // this.obstaclesTree2 = this.game.add.group()
            // this.obstaclesPillar2 = this.game.add.group()



            this.map.createFromObjects('Object Layer', 188, 'jasonMask', 0, true, true, this.obstaclesJasonMask, JasonMask)
            this.map.createFromObjects('Object Layer', 189, 'heart', 0, true, true, this.obstaclesHeart, Heart)
            this.map.createFromObjects('Object Layer', 190, 'spike', 0, true, true, this.obstaclesSpike, Spike)
            this.map.createFromObjects('Object Layer', 191, 'flyingPlataformG', 0, true, true, this.obstaclesPlataformUpDown, Plataform)
            this.map.createFromObjects('Object Layer', 192, 'portal', 0, true, true, this.obstaclesPortal, Portal)
            this.map.createFromObjects('Object Layer', 193, 'sidePlataform', 0, true, true, this.obstaclesPlataformSide, PlataformSide)
            this.map.createFromObjects('Object Layer', 194, 'invisibleWall', 0, true, true, this.obstaclesInvisibleWall, InvisibleWall)
            this.map.createFromObjects('Object Layer', 195, 'poison', 0, true, true, this.obstaclesPoison, Veneno)
            this.map.createFromObjects('Object Layer', 196, 'ghost2', 0, true, true, this.obstaclesGhost, Ghost)
           
            // this.map.createFromObjects('Object Layer', 163, 'pillar2', 0, true, true, this.obstaclesPillar2, Heart)
            // this.map.createFromObjects('Object Layer', 179, 'tree2', 0, true, true, this.obstaclesTree2, Heart)


        }
        else if (config.LEVEL == 3) {
            this.map.addTilesetImage('level 3 tileset')
            this.mapLayer = this.map.createLayer('Background Layer')
            this.mapLayer = this.map.createLayer('Map Layer')
            this.map.setCollisionBetween(0, 300, true, 'Map Layer')

            this.obstaclesLava = this.game.add.group()
            this.obstaclesJasonMask = this.game.add.group()
            this.obstaclesPlataformSide = this.game.add.group()
            this.obstaclesInvisibleWall = this.game.add.group()
            this.obstaclesPortal = this.game.add.group()
            this.obstaclesGhost = this.game.add.group()
            

            this.map.createFromObjects('Object Layer', 155, 'jasonMask', 0, true, true, this.obstaclesJasonMask, JasonMask)
            this.map.createFromObjects('Object Layer', 156, 'lava', 0, true, true, this.obstaclesLava, Lava)
            this.map.createFromObjects('Object Layer', 157, 'sidePlataform', 0, true, true, this.obstaclesPlataformSide, PlataformSide)
            this.map.createFromObjects('Object Layer', 159, 'invisibleWall', 0, true, true, this.obstaclesInvisibleWall, InvisibleWall)
            this.map.createFromObjects('Object Layer', 160, 'portal', 0, true, true, this.obstaclesPortal, Portal)
            this.map.createFromObjects('Object Layer', 161, 'ghost3', 0, true, true, this.obstaclesGhost, Ghost)
            // this.map.createFromObjects('Object Layer', 159, 'invisibleWall', 0, true, true, this.obstacleInvisibleWallLeft, InvisibleWall)
            // this.map.createFromObjects('Object Layer', 160, 'invisibleWall', 0, true, true, this.obstacleInvisibleWallRight, InvisibleWall)


        }

        else if (config.LEVEL == 4) {

            this.map.addTilesetImage('level 4 tileset')
            this.mapLayer = this.map.createLayer('Background Layer')
            this.mapLayer = this.map.createLayer('Map Layer')
            this.map.setCollisionBetween(0, 300, true, 'Map Layer')


            this.obstaclesHeart = this.game.add.group()
            this.obstaclesJasonMask = this.game.add.group()
            this.obstaclesPortal = this.game.add.group()
            this.obstaclesPlataformUpDown = this.game.add.group()
            this.obstaclesInvisibleWall = this.game.add.group()
            this.obstaclesSpike = this.game.add.group()
            this.obstaclesWater = this.game.add.group()
            this.obstaclesPlataformSide = this.game.add.group()
            this.obstaclesKnife = this.game.add.group()
            this.obstaclesGhost = this.game.add.group()

            this.map.createFromObjects('Object Layer', 155, 'spike', 0, true, true, this.obstaclesSpike, Spike)
            this.map.createFromObjects('Object Layer', 156, 'jasonMask', 0, true, true, this.obstaclesJasonMask, JasonMask)
            this.map.createFromObjects('Object Layer', 157, 'heart', 0, true, true, this.obstaclesHeart, Heart)
            this.map.createFromObjects('Object Layer', 158, 'knife', 0, true, true, this.obstaclesKnife, Knife)
            this.map.createFromObjects('Object Layer', 159, 'portal', 0, true, true, this.obstaclesPortal, Portal)
            this.map.createFromObjects('Object Layer', 160, 'flyingPlataformB', 0, true, true, this.obstaclesPlataformSide, PlataformSide)
            this.map.createFromObjects('Object Layer', 161, 'flyingPlataformB', 0, true, true, this.obstaclesPlataformUpDown, Plataform)
            this.map.createFromObjects('Object Layer', 162, 'invisibleWall', 0, true, true, this.obstaclesInvisibleWall, InvisibleWall)
            this.map.createFromObjects('Object Layer', 163, 'water', 0, true, true, this.obstaclesWater, Agua)
            this.map.createFromObjects('Object Layer', 164, 'ghost4', 0, true, true, this.obstaclesGhost, Ghost)

            // this.obstaclesLava = this.game.add.group()
            // this.obstaclesJasonMask = this.game.add.group()
            // this.obstaclesPlataformSide = this.game.add.group()
            // this.obstacleInvisibleWallLeft = this.game.add.group()
            // this.obstacleInvisibleWallRight = this.game.add.group()
            // this.obstaclesPortal = this.game.add.group()

            // this.map.createFromObjects('Object Layer', 155, 'jasonMask', 0, true, true, this.obstaclesJasonMask, JasonMask)
            // this.map.createFromObjects('Object Layer', 156, 'lava', 0, true, true, this.obstaclesLava, Lava)
            // this.map.createFromObjects('Object Layer', 157, 'sidePlataform', 0, true, true, this.obstaclesPlataformSide, PlataformSide)
            // this.map.createFromObjects('Object Layer', 159, 'invisibleWall', 0, true, true, this.obstacleInvisibleWallLeft, InvisibleWall)
            // this.map.createFromObjects('Object Layer', 160, 'invisibleWall', 0, true, true, this.obstacleInvisibleWallRight, InvisibleWall)
            // this.map.createFromObjects('Object Layer', 161, 'portal', 0, true, true, this.obstaclesPortal, Portal)

        }

        this.iniciaAnimations()
        this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
        // this.timerScore.start();
        this.mapLayer.resizeWorld()
    }

    updateCounter() {
        this.scoreTime--;
    }

    toggleFullScreen() {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL
        if (this.game.scale.isFullScreen) {
            this.game.scale.stopFullScreen()
        } else {
            this.game.scale.startFullScreen(false)
        }
    }

    createAudios() {
        this.evilLaugh1 = this.game.add.audio('evilLaugh1')
        // this.evilLaugh1.volume = 1.0

        this.getHeart = this.game.add.audio('getHeart')
        this.gameOverEffect = this.game.add.audio('gameOverEffect')
        this.jasonDeath = this.game.add.audio('jasonDeath')
        this.theme = this.game.add.audio('theme')
        this.jasonEffect = this.game.add.audio('jasonEffect')
    }

    playThemeSong() {
        this.theme.loopFull(0.8)

    }



    update() {

        this.backGround.tilePosition.x -= 0.5
        this.fog.tilePosition.x += 0.1
        this.fog.tilePosition.y -= 0.1
        this.isGameOver()

        if (config.LEVEL == 1) {


            this.game.physics.arcade.collide(this.player1, this.mapLayer, this.setAllowJump)
            this.game.physics.arcade.collide(this.player1, this.obstaclesSpike, this.hitSpike, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesHeart, this.hitHeart, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesKnife, this.hitKnife, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesJasonMask, this.hitJasonMask, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesPortal, this.hitPortal, null, this);
            this.game.physics.arcade.collide(this.player1, this.obstaclesPlataformUpDown, this.setAllowJumpInPlataform)
            this.game.physics.arcade.collide(this.obstaclesPlataformUpDown, this.mapLayer, this.plataformCollideGround)
            this.game.physics.arcade.collide(this.obstaclesPlataformUpDown, this.obstaclesInvisibleWall, this.plataformCollideSky)
            this.game.physics.arcade.collide(this.obstaclesGhost, this.obstaclesInvisibleWall, this.ghostCollide, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesGhost, this.hitGhost)
            // this.game.physics.arcade.overlap(this.player1, this.obstacleTerrenos, this.inLama, null, this);

        }
        else if (config.LEVEL == 2) {
            this.game.physics.arcade.collide(this.player1, this.mapLayer, this.setAllowJump)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesPortal, this.hitPortal, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesPoison, this.hitPoison, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesHeart, this.hitHeart, null, this);
            this.game.physics.arcade.collide(this.player1, this.obstaclesSpike, this.hitSpike, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesKnife, this.hitKnife, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesJasonMask, this.hitJasonMask, null, this);
            this.game.physics.arcade.collide(this.player1, this.obstaclesPlataformUpDown, this.setAllowJumpInPlataform)
            this.game.physics.arcade.collide(this.obstaclesPlataformUpDown, this.mapLayer, this.plataformCollideGround)
            this.game.physics.arcade.collide(this.obstaclesPlataformUpDown, this.obstaclesInvisibleWall, this.plataformCollideSky)
            this.game.physics.arcade.collide(this.player1, this.obstaclesPlataformSide, this.setAllowJumpInPlataform)
            this.game.physics.arcade.collide(this.obstaclesPlataformSide, this.obstaclesInvisibleWall, this.plataformCollide)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesGhost, this.hitGhost)
            this.game.physics.arcade.collide(this.obstaclesGhost, this.obstaclesInvisibleWall, this.ghostCollide, null, this)
          

        }
        else if (config.LEVEL == 3) {

            this.game.physics.arcade.collide(this.player1, this.obstaclesLava, this.hitLava, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesJasonMask, this.hitJasonMask, null, this);
            this.game.physics.arcade.collide(this.player1, this.mapLayer, this.setAllowJump)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesKnife, this.hitKnife, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesPortal, this.hitPortal, null, this);
            this.game.physics.arcade.collide(this.player1, this.obstaclesPlataformSide, this.setAllowJumpInPlataform)
            this.game.physics.arcade.collide(this.player1, this.obstaclesGhost, this.hitGhost)
            this.game.physics.arcade.collide(this.obstaclesPlataformSide, this.obstaclesInvisibleWall, this.plataformCollide)
            this.game.physics.arcade.overlap(this.obstaclesGhost, this.obstaclesInvisibleWall, this.ghostCollide, null, this)

        }

        else if (config.LEVEL == 4) {
            this.game.physics.arcade.collide(this.player1, this.mapLayer, this.setAllowJump)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesWater, this.hitWater, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesPortal, this.hitPortal, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesHeart, this.hitHeart, null, this);
            this.game.physics.arcade.collide(this.player1, this.obstaclesSpike, this.hitSpike, null, this)
            this.game.physics.arcade.overlap(this.player1, this.obstaclesKnife, this.hitKnife, null, this);
            this.game.physics.arcade.overlap(this.player1, this.obstaclesJasonMask, this.hitJasonMask, null, this);
            this.game.physics.arcade.collide(this.player1, this.obstaclesPlataformUpDown, this.setAllowJumpInPlataform)
            this.game.physics.arcade.collide(this.obstaclesPlataformUpDown, this.mapLayer, this.plataformCollideGround)
            this.game.physics.arcade.collide(this.obstaclesPlataformUpDown, this.obstaclesInvisibleWall, this.plataformCollideSky)
            this.game.physics.arcade.collide(this.player1, this.obstaclesPlataformSide, this.setAllowJumpInPlataform)
            this.game.physics.arcade.collide(this.obstaclesPlataformSide, this.obstaclesInvisibleWall, this.plataformCollide)
            this.game.physics.arcade.overlap(this.obstaclesGhost, this.obstaclesInvisibleWall, this.ghostCollide, null, this)
            this.game.physics.arcade.collide(this.player1, this.obstaclesGhost, this.hitGhost)
        }

        this.updateHud()
    }

    inLama(sprite, tile) {
        if (tile.key == 'lama') {
            sprite.body.x -= tile.body.x - tile.body.prev.x;
        }
    }

    hitPortal(sprite, tile) {
        if (config.LEVEL == 4) {
            onfig.LEVEL = 1
            this.state.start('WinState')

        } else {

            config.PLAYER_SCORE += 1000
            config.PLAYER_SCORE += this.scoreTime * 10

            this.loadNextLevel()

        }

    }




    loadNextLevel() {
        // config.LEVEL += 2
        config.LEVEL++
        // if (config.LEVEL > 2) config.LEVEL = 1
        config.PLAYER_HEALTH = this.player1.health
        // config.PLAYER_HEALTH = 5
        // config.PLAYER_SCORE = this.player1.score
        config.ATTACK_DAMAGE = this.player1.attackDamage
        this.game.state.restart()
    }

    fromTheBegin() {
        config.LEVEL = 1
        this.state.start('Title')
    }

    plataformCollideGround(sprite, tile) {
        sprite.hitGround = true
        sprite.hitSky = false
    }

    plataformCollide(sprite, tile) {

        if (sprite.hitWall == 1) {
            sprite.hitWall = 2;
        } else {
            sprite.hitWall = 1;
        }
    }

    ghostCollide(sprite, tile) {

        if (sprite.hitWall == 1) {
            sprite.hitWall = 2;
        } else {
            sprite.hitWall = 1;
        }
    }


    plataformCollideSky(sprite, tile) {
        sprite.hitSky = true
        sprite.hitGround = false
    }

    plataformCollideLeft(sprite, tile) {
        sprite.hitLeft = true
        sprite.hitRight = false
    }


    plataformCollideRight(sprite, tile) {
        sprite.hitRight = true
        sprite.hitLeft = false
    }

    setAllowJump(sprite, tile) {
        sprite.jumpAllow = true
    }

    setAllowJumpInPlataform(sprite, tile) {
        sprite.jumpAllow = true
        sprite.inPlataform = true
    }
    hitHeart(sprite, tile) {
        this.player1.health++
        this.getHeart.play()
        tile.kill()
    }

    hitKnife(sprite, tile) {
        this.player1.attackDamage++
        // this.getHeart.play()
        tile.kill()
    }

    hitJasonMask(sprite, tile) {
        config.PLAYER_SCORE += config.SCORE_MASK
        this.evilLaugh1.play()
        tile.kill()
    }

    hitSpike(sprite, tile) {
        sprite.health -= 1
        this.jasonDeath.play()
        sprite.jumpAllow = true
        sprite.inPlataform = true

        this.beginLevel(sprite, tile);


    }

    beginLevel(sprite, tile) {

        sprite.body.
            sprite.body.position.x = -this.game.width
        sprite.body.position.y = this.game.height + 170


    }

    hitGhost(sprite, tile) {
        sprite.health -= 1
        
        // this.beginLevel(sprite, tile);

    }

    isGameOver() {

        if (this.player1.health < 1) {
            config.LEVEL = 1
            this.state.start('GameOver');
            this.gameOverEffect.play()
        }
    }

    hitLava(sprite, tile) {
        this.jasonDeath.play()

        sprite.health -= 0.01
        sprite.jumpAllow = true
        sprite.inPlataform = true
        this.game.camera.shake(0.01, 200);

    }


    hitWater(sprite, tile) {
        this.jasonDeath.play()

        sprite.health = 0
        sprite.jumpAllow = true
        sprite.inPlataform = true
        this.game.camera.shake(0.01, 200);

    }


    hitPoison(sprite, tile) {
        this.jasonDeath.play()

        sprite.health -= 0.01
        sprite.jumpAllow = true
        sprite.inPlataform = true
        this.game.camera.shake(0.01, 200);
        sprite.isOnPoison = true;

        if (this.timer.events.length < 1) {

            this.timer.add(5000, this.effectPoison, this);
            this.timer.start();
        }


    }

    effectPoison() {
        this.player1.health -= 0.5
        this.game.camera.shake(0.01, 200);
        this.player1.isOnPoison = false;
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
        this.hud.text1.text = `Vida : ${Number((this.player1.health).toFixed(1))}`,
            this.hud.score.text = `Score : ${config.PLAYER_SCORE}`,
            this.hud.attackHud.text = `Attack : ${this.player1.attackDamage}`,
            this.hud.timerScore.text = `Bonus Timer : ${this.scoreTime} `

    }

    render() {

        // this.obstaclesInvisibleWall.forEach(function (obj) {
        //     this.game.debug.body(obj)
        // }, this)

        // this.obstaclesGhost.forEach(function (obj) {
        //     this.game.debug.body(obj)
        // }, this)

        // this.obstaclePlataformUpDown.forEach(function (obj) {
        //     this.game.debug.body(obj)
        // }, this)

        // this.obstaclesPlataformSide.forEach(function (obj) {
        //     this.game.debug.body(obj)
        // }, this)

        // this.obstacleInvisibleWallLeft.forEach(function (obj) {
        //     this.game.debug.body(obj)
        // }, this)

        // this.obstacleInvisibleWallRight.forEach(function (obj) {
        //     this.game.debug.body(obj)
        // }, this)


        // this.game.debug.text('Time until event: ' + this.scoreTime, 32, 32)
        // this.game.debug.text('Time until event: ' + this.timerScore.duration.toFixed(0), 32, 32);
    }
}

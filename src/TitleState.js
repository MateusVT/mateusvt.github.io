'use strict'

class TitleState extends BaseState {

    create() {
        // let skyWidth = this.game.cache.getImage('sky').width
        // let skyHeight = this.game.cache.getImage('sky').height
        // this.sky = this.game.add.tileSprite(
        //     0, 0, skyWidth, skyHeight, 'sky')
        // this.sky.scale.x = this.game.width / this.sky.width
        // this.sky.scale.y = this.game.height / this.sky.height

        // this.title = this.game.add.sprite(this.game.width/2, this.game.height*1/3, 'title')



        this.title = this.game.add.sprite(800, 480, 'titleBackGround')
        this.title.anchor.setTo(0.87, 1)
        // this.title.scale.setTo(1.5, 1.5)

        this.fog = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'fog1')
        this.fog.tileScale.setTo(10, 10)
        this.fog.alpha = 0.2

        this.pressedTouch = false
        this.pressStart = this.createText(this.game.width / 2, this.game.height * 2 / 3, 'Toque para Iniciar', 24)
        this.info = this.createText(this.game.width / 2, this.game.height - 100, 'Mateus Torres', 18)
        this.info = this.createText(this.game.width / 2, this.game.height - 50, 'UTFPR-CM  /  2018', 18)

        let startButton = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.game.input.onDown.add(this.startGame, this);
        // startButton.events.onInputDown.add(this.startGame, this)
        // let startButtonM = this.input.pointer1.isDown.add()
        this.initFullScreenButtons()
    }

    startGame() {
        // if (this.input.pointer1.isDown) {

        //     this.state.start('Game')
        // }
        this.state.start('GameState')
    }

    update() {
         this.game.camera.shake(0.00001, 20);
        this.fog.tilePosition.x += 0.3

        // this.startGame()
        // this.sky.tilePosition.x += 0.5
    }

    render() {
        //obstacles.forEach(function(obj) { game.debug.body(obj) })
        //game.debug.body(player1)
        //game.debug.body(player2)
    }
}
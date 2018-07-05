'use strict'

class WinState extends BaseState {

    create() {

        this.title = this.game.add.sprite(800, 480, 'youWinBack')
        this.title.anchor.setTo(0.5, 0.5)
        this.title.position.x = 400
        this.title.position.y = 240

        this.pressedTouch = false
        this.pressStart = this.createText(this.game.width / 2, this.game.height * 2 / 3.5, `SEU SCORE FINAL É : ${config.PLAYER_SCORE}`, 24)
        this.pressStart = this.createText(this.game.width / 2, this.game.height * 2 / 2.5, 'Toque para Iniciar', 20)

        this.info = this.createText(this.game.width / 2, this.game.height -50, 'Mateus Torres', 18)

        let startButton = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.game.input.onDown.add(this.startGame, this);
        this.initFullScreenButtons()

    }

    startGame() {
            this.state.start('Title')
    }

    update() {

    }


}
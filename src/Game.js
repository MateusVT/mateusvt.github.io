'use strict'

const config = {}
config.RES_X = 800
config.RES_Y = 480

config.PLAYER_ACCELERATION = 100
config.PLAYER_TURN_VELOCITY = 350
config.PLAYER_MAX_VELOCITY = 300
config.PLAYER_VELOCITY_X = 350
// config.PLAYER_VELOCITY_X = 1200
config.PLAYER_MAX_JUMP = 520
// config.PLAYER_MAX_JUMP = 400
config.FRICTION = 80
config.GRAVITY = 300
config.PLAYER_DRAG = 80
config.MASS = 200

config.PLAYER_HEALTH = 5000
// config.PLAYER_HEALTH = 5
config.SCORE_MASK = 50
config.ATTACK_DAMAGE = 1

config.PLAYER_SCORE = 0
config.LEVEL = 1

class Game extends Phaser.Game {
    constructor() {
        super(config.RES_X, config.RES_Y, Phaser.CANVAS, 'game-container')

        this.state.add('Boot', BootState, false)
        this.state.add('Title', TitleState, false)
        this.state.add('GameState', GameState, false)
        this.state.add('GameOver', GameOverState, false)
        this.state.add('WinState', WinState, false)

        this.state.start('Boot')
    }
}

let GAME = new Game()

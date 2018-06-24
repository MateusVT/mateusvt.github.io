'use strict'

class BootState extends Phaser.State {

    preload() {

        //Title
        // this.game.load.spritesheet('button_action', 'assets/Title/Hero Title.png', 300, 96)

        //Virtual Pad
        this.game.load.spritesheet('button_action', 'assets/Control/button_action.png', 50, 50)
        this.game.load.image('button_move', 'assets/Control/button_move.png', 105, 50)
        // this.game.load.spritesheet('button_move', 'assets/Control/button_move.png', 105, 50)
        this.game.load.spritesheet('button_attack', 'assets/Control/button_attack.png', 50, 50)


        // Caracter        
        // this.game.load.spritesheet('hero', 'assets/Player/hero.png', 50, 37, 154)
        // this.game.load.atlasJSONArray('jason', 'assets/Player/jason.png', 'assets/Player/jason.json' )
        
        this.game.load.atlasJSONArray('jason', 'assets/Player/jasonteste.png', 'assets/Player/jason2.json' )
        // this.game.load.spritesheet('hero', 'assets/Player/hero1.png', 36, 46,6,0,1)
        // this.game.load.image('hero', 'assets/Imagens/hero.png')


        // Levels
        this.game.load.tilemap('level1 map', 'assets/Mapas/Level 1/Level 2.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.image('level1 background', 'assets/Mapas/Level 1/level1 background.png')
        this.game.load.image('level1 tileset terrain', 'assets/Mapas/Level 1/level1 tileset terrain.png')

        // this.game.load.tilemap('level1', 'assets/Mapas/Level 2.json', null, Phaser.Tilemap.TILED_JSON)
        // this.game.load.tilemap('level1', 'assets/Mapas/Level 3.json', null, Phaser.Tilemap.TILED_JSON)
        // this.game.load.tilemap('level1', 'assets/Mapas/Level 4.json', null, Phaser.Tilemap.TILED_JSON)

    }

    create() {
        console.log("BootState created")
        // this.state.start('Title')
        this.state.start('Game')
    }
}
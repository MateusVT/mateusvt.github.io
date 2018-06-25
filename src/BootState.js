'use strict'

class BootState extends Phaser.State {

    preload() {

        //Title
        this.game.load.image('titleBackGround', 'assets/Title/Ttile Background.png', 800, 480)
        // this.game.load.image('button_action', 'assets/Title/Hero Title.png', 300, 96)

        //Virtual Pad
        this.game.load.spritesheet('button_action', 'assets/Control/button_action.png', 50, 50)
        this.game.load.image('button_move', 'assets/Control/button_move.png', 105, 50)
        // this.game.load.spritesheet('button_move', 'assets/Control/button_move.png', 105, 50)
        this.game.load.spritesheet('button_attack', 'assets/Control/button_attack.png', 50, 50)
        
        
        // Effects
        this.game.load.image('fog', 'assets/Effects/fog.png')
        
        
        // Caracter        
        // this.game.load.spritesheet('hero', 'assets/Player/hero.png', 50, 37, 154)
        // this.game.load.atlasJSONArray('jason', 'assets/Player/jason.png', 'assets/Player/jason.json' )

        this.game.load.atlasJSONArray('jason', 'assets/Player/playerJason.png', 'assets/Player/jason.json')
        // this.game.load.spritesheet('hero', 'assets/Player/hero1.png', 36, 46,6,0,1)
        // this.game.load.image('hero', 'assets/Imagens/hero.png')

        //Interactable
        this.game.load.image('flyeingPlataform', 'assets/Interactable/flying plataform.png', 132, 65)


        //Collectable
        this.game.load.spritesheet('heart', 'assets/Collectable/heart.png', 50, 50)
        this.game.load.spritesheet('jasonMask', 'assets/Collectable/jasonMask.png', 64, 64)

        //Sound Effects 
        this.game.load.audio('theme', 'assets/Sound Effects/Theme.mp3')
        this.game.load.audio('evilLaugh1', 'assets/Sound Effects/Evil Laugh 1.mp3')
        this.game.load.audio('jasonEffect', 'assets/Sound Effects/Jason Effect.mp3')

        // Levels
        //Level 1
        this.game.load.tilemap('level1', 'assets/Mapas/Level 1/Level 1.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.image('level1 background', 'assets/Mapas/Level 1/level1 background.png')
        this.game.load.image('level 1 map', 'assets/Mapas/Level 1/level 1 tileset.png')
        // this.game.load.image('spike', 'assets/Mapas/Level 1/pillar.png')
        // this.game.load.image('pillar', 'assets/Mapas/Level 1/spike.png')


        // this.game.load.image('flying plataform', 'assets/Player/flying plataform.png', 132, 65)
        // this.game.load.spritesheet('heart', 'assets/Player/heart.png', 25, 25)

        // this.game.load.tilemap('level1', 'assets/Mapas/Level 2.json', null, Phaser.Tilemap.TILED_JSON)
        // this.game.load.tilemap('level1', 'assets/Mapas/Level 3.json', null, Phaser.Tilemap.TILED_JSON)
        // this.game.load.tilemap('level1', 'assets/Mapas/Level 4.json', null, Phaser.Tilemap.TILED_JSON)

    }

    create() {
        // console.log("BootState created")
        this.state.start('Title')
        // this.state.start('Game')
    }
}
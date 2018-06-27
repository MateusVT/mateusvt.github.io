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
        this.game.load.image('fog1', 'assets/Effects/fog1.png')
        this.game.load.image('fog2', 'assets/Effects/fog2.png')
        this.game.load.image('fog3', 'assets/Effects/fog3.png')
        this.game.load.image('fog4', 'assets/Effects/fog4.png')
        this.game.load.image('fog5', 'assets/Effects/fog5.png')
        this.game.load.image('fog6', 'assets/Effects/fog6.png')


        // Caracter        
        this.game.load.atlasJSONArray('jason', 'assets/Player/playerJason.png', 'assets/Player/jason.json')

        //Interactable
        this.game.load.image('flyingPlataform', 'assets/Interactable/flying plataform.png')
        this.game.load.image('invisibleWall', 'assets/Interactable/invisibleWall.png')
        this.game.load.spritesheet('portal', 'assets/Interactable/portal.png', 148, 120)


        //Obstacles
        this.game.load.image('spike', 'assets/Obstacles/spike.png')


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
        this.state.start('Title')
        // this.state.start('Game')
    }
}
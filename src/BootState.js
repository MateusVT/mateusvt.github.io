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

        //Ornaments
        this.game.load.image('skull', 'assets/Ornaments/dies.png')


        // Caracter        
        this.game.load.atlasJSONArray('jason', 'assets/Player/playerJason.png', 'assets/Player/jason.json')

        //Interactable
        this.game.load.image('flyingPlataform', 'assets/Interactable/flying plataform.png')
        this.game.load.image('sidePlataform', 'assets/Interactable/side plataform.png')
        this.game.load.image('invisibleWall', 'assets/Interactable/invisibleWall.png')
        this.game.load.spritesheet('portal', 'assets/Interactable/portal.png', 148, 120)


        //Obstacles
        this.game.load.image('spike', 'assets/Obstacles/spike.png', 64, 64)
        this.game.load.spritesheet('lava', 'assets/Obstacles/lava.png', 128, 64)
        this.game.load.spritesheet('water', 'assets/Obstacles/water.png', 128, 64)
        this.game.load.spritesheet('poison', 'assets/Obstacles/poison.png', 128, 64)
        this.game.load.spritesheet('lama', 'assets/Obstacles/lama.png', 128, 64)


        //Collectable
        this.game.load.spritesheet('heart', 'assets/Collectable/heart.png', 50, 50)
        this.game.load.spritesheet('jasonMask', 'assets/Collectable/jasonMask.png', 64, 64)

        //Sound Effects 
        this.game.load.audio('theme', 'assets/Sound Effects/Theme.mp3')
        this.game.load.audio('evilLaugh1', 'assets/Sound Effects/Evil Laugh 1.mp3')
        this.game.load.audio('jasonEffect', 'assets/Sound Effects/Jason Effect.mp3')
        this.game.load.audio('jasonDeath', 'assets/Sound Effects/death.wav')
        this.game.load.audio('getHeart', 'assets/Sound Effects/getHeart.mp3')

        // Levels
        //Level 1
        this.game.load.tilemap('level1', 'assets/Mapas/Level 1/Level 1.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.image('level 1 map', 'assets/Mapas/Level 1/level 1 tileset.png')
        this.game.load.image('level1 background', 'assets/Mapas/Level 1/level 1 background.png')


        // Level 2
        this.game.load.tilemap('level2', 'assets/Mapas/Level 2/Level 2.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.image('level 2 map', 'assets/Mapas/Level 2/level 2 tileset.png')
        this.game.load.image('level2 background', 'assets/Mapas/Level 2/level 2 background.png')

        //Level 3
        this.game.load.tilemap('level3', 'assets/Mapas/Level 3/Level 3.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.image('level 3 tileset', 'assets/Mapas/Level 3/level 3 tileset.png')
        this.game.load.image('level3 background', 'assets/Mapas/Level 3/level 3 background.png')


        //Level 4
        this.game.load.tilemap('level4', 'assets/Mapas/Level 4/Level 4.json', null, Phaser.Tilemap.TILED_JSON)
        this.game.load.image('level 4 tileset', 'assets/Mapas/Level 4/level 4 tileset.png')
        this.game.load.image('level4 background', 'assets/Mapas/Level 4/level 4 background.png')


    }

    create() {
        this.state.start('Title')
        // this.state.start('Game')
    }
}
class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        //Adiciona imagens ao código
        this.load.image('startButton', 'assets/start.png');
        this.load.image('backgroundMenu', 'assets/background_menu.png');
    }

    create() {
        //Cria a imagem e adiciona texto 
        this.add.image(400, 300, 'backgroundMenu');
        this.add.text(250, 100, "Jogo do Labirinto", { fontSize: "48px", fill: "#fff" });
        let startButton = this.add.image(400, 400, 'startButton').setInteractive();
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
        this.score = 0;
        this.hasKey = false;
    }

    preload() {
        //Adiciona as imagens do jogo
        this.load.image('player', 'assets/player.png');
        this.load.image('key', 'assets/key.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('door', 'assets/door.png');
        this.load.tilemapTiledJSON('map', 'assets/map.json');
        this.load.image('tiles', 'assets/tileset.png');
        this.load.image('backgroundGame', 'assets/background_game.png');
    }

    create() {
        //cria a imagem do backgorund
        this.add.image(400, 300, 'backgroundGame');
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tileset", "tiles");
        map.createLayer("Ground", tileset, 0, 0);
        
        //cria o personagem jogável
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        
        //cria a chave e a porta
        this.spawnKey();
        this.door = this.physics.add.sprite(500, 200, 'door');
        this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
        //cria o inimigo
        this.enemy = this.physics.add.sprite(400, 200, 'enemy');
        this.enemy.setVelocity(250, 200);
        this.enemy.setBounce(1, 1);
        this.enemy.setCollideWorldBounds(true);
        //cria o placar
        this.scoreText = this.add.text(16, 16, 'Placar: 0', { fontSize: '32px', fill: '#fff' });
        //verifica se o jogador colidiu com a chave
        this.physics.add.overlap(this.player, this.keyItem, this.collectKey, null, this);
        this.physics.add.overlap(this.player, this.enemy, () => {
            this.scene.start('GameOverScene');
        });
        //cria os controles do jogador
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        //movimenta o jogador
        this.player.setVelocity(0);
        //verifica se o jogador está pressionando as teclas
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);
        }
    }

    spawnKey() {
        //verifica se a chave já existe
        if (this.keyItem) {
            this.keyItem.destroy();
        }
        let x = Phaser.Math.Between(50, 750);
        let y = Phaser.Math.Between(50, 550);
        //cria a chave
        this.keyItem = this.physics.add.sprite(x, y, 'key');
        this.physics.add.overlap(this.player, this.keyItem, this.collectKey, null, this);
        this.hasKey = false;
    }
    //função para coletar a chave
    collectKey(player, key) {
        this.score += 10;
        this.scoreText.setText('Placar: ' + this.score);
        key.destroy();
        this.hasKey = true;
    }
    //função para entrar na porta
    enterDoor(player, door) {
        if (this.hasKey) {
            this.scene.start('GameScene2');
        }
    }
}

class GameScene2 extends Phaser.Scene {
    constructor() {
        super("GameScene2");
        this.score = 10
        this.hasKey = false
    }

    preload() { 
        //Adiciona as imagens do jogo
        this.load.image('player', 'assets/player.png');
        this.load.image('key', 'assets/key.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('door', 'assets/door.png');
        this.load.tilemapTiledJSON('map', 'assets/map2.json');
        this.load.image('tiles', 'assets/tileset.png');
        this.load.image('backgroundGame2', 'assets/background_game2.png');
    }

    create() {
        //cria a imagem do backgorund
        this.add.image(400, 300, 'backgroundGame2');
        const map = this.make.tilemap({ key: "map2" });
        const tileset = map.addTilesetImage("tileset", "tiles");
        map.createLayer("Ground", tileset, 0, 0);
        //cria o personagem jogável
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        //cria a chave e a porta
        this.spawnKey();
        this.door = this.physics.add.sprite(500, 200, 'door');
        this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
        //cria o inimigo
        this.enemy = this.physics.add.sprite(400, 200, 'enemy');
        this.enemy.setVelocity(100, 100);
        this.enemy.setBounce(1, 1);
        this.enemy.setCollideWorldBounds(true);
        //cria o inimigo
        this.enemy1 = this.physics.add.sprite(200, 300, 'enemy');
        this.enemy1.setVelocity(200, 200);
        this.enemy1.setBounce(1, 1);
        this.enemy1.setCollideWorldBounds(true);
        //cria o inimigo
        this.enemy2 = this.physics.add.sprite(200, 300, 'enemy');
        this.enemy2.setVelocity(450, 300);
        this.enemy2.setBounce(1, 1);
        this.enemy2.setCollideWorldBounds(true);
        //cria o placar
        this.scoreText = this.add.text(16, 16, 'Placar: 10', { fontSize: '32px', fill: '#fff' });
        //verifica se o jogador colidiu com a chave
        this.physics.add.overlap(this.player, this.keyItem, this.collectKey, null, this);
        this.physics.add.overlap(this.player, this.enemy, () => {
            this.scene.start('GameOverScene');
        });
        this.physics.add.overlap(this.player, this.enemy1, () => {
            this.scene.start('GameOverScene');
        });
        this.physics.add.overlap(this.player, this.enemy2, () => {
            this.scene.start('GameOverScene');
        });
        //cria os controles do jogador
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        //movimenta o jogador
        this.player.setVelocity(0);
        //verifica se o jogador está pressionando as teclas
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);
        }
    }
    //função para criar a chave
    spawnKey() {
        //verifica se a chave já existe
        if (this.keyItem) {
            this.keyItem.destroy();
        }
        //cria a chave
        let x = Phaser.Math.Between(50, 750);
        let y = Phaser.Math.Between(50, 550);
        this.keyItem = this.physics.add.sprite(x, y, 'key');
        this.physics.add.overlap(this.player, this.keyItem, this.collectKey, null, this);
        this.hasKey = false;
    }
    //função para coletar a chave
    collectKey(player, key) {
        this.score += 10;
        this.scoreText.setText('Placar: ' + this.score);
        key.destroy();
        this.hasKey = true;
    }
    //função para entrar na porta
    enterDoor(player, door) {
        if (this.hasKey) {
            this.scene.start('WinScene');
        }
    }
}

class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    preload() {
        //Adiciona a imagem do game over
        this.load.image('backgroundGameOver', 'assets/background_gameover.png');
    }

    create() {
        //cria a imagem do game over
        this.add.image(400, 300, 'backgroundGameOver');
        this.add.text(300, 100, "Game Over", { fontSize: "48px", fill: "#f00" });
        this.input.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}

class WinScene extends Phaser.Scene {
    constructor() {
        super("WinScene");
    }

    preload() {
        //Adiciona a imagem de vitória
        this.load.image('backgroundWin', 'assets/background_win.png');
    }

    create() {
        //cria a imagem de vitória
        this.add.image(400, 300, 'backgroundWin');
        this.input.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: { default: 'arcade', arcade: { debug: false } },
    scene: [MenuScene, GameScene, GameScene2, GameOverScene, WinScene]
};

const game = new Phaser.Game(config);

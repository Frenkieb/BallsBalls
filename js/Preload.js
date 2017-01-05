var BallsBalls = BallsBalls || {};

BallsBalls.Preload = function(){};

BallsBalls.Preload.prototype = {
    preload: function(){
        //show logo in loading screen
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);

        //load game assets
        this.load.image('ball', 'assets/ball.png');
        this.load.spritesheet('player', 'assets/player.png', 20, 20);
    },
    create: function(){
        BallsBalls.game.state.start('MainMenu');
    }
};

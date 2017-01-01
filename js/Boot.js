var BallsBalls = BallsBalls || {};

BallsBalls.Boot = function(){};

BallsBalls.Boot.prototype = {
    preload: function() {
        this.load.image('logo', 'assets/logo.png');
    },
    create: function(){

        //loading screen will have a white background
        this.game.stage.backgroundColor = '#317873';

        //scaling options
        /*this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 240;
        this.scale.minHeight = 170;
        this.scale.maxWidth = 2880;
        this.scale.maxHeight = 1920;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;

        //screen size will be set automatically
        this.scale.setScreenSize(true);*/

        //physics system for movement
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.state.start('Preload');
    }
};

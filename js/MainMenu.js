var BallsBalls = BallsBalls || {};

BallsBalls.MainMenu = function(){};

BallsBalls.MainMenu.prototype = {
    preload: function(){
        //show logo in loading screen
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 200, 'logo');
        this.splash.anchor.setTo(0.5);
    },
    create: function(){
        //start game text
        var text = "Press space to begin";
        var style = { font: "30px Arial", fill: "#fff", align: "center" };
        var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
        t.anchor.set(0.5);

        // Display current highscores.
        var savedHighscores = parseInt(localStorage.getItem('ballsballshighscores'));
        if ( savedHighscores ) {
            var text = 'Current highscore: ' + savedHighscores;
            var style = { font: "15px Arial", fill: "#fff", align: "center" };
            var t = this.game.add.text(this.game.width/2, (this.game.height/2) + 50, text, style);
            t.anchor.set(0.5);
        }

        this.game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },
    update: function(){
        if (this.game.spaceKey.isDown) {
            BallsBalls.game.state.start('Game');
        }
    }
};

var BallsBalls = BallsBalls || {};

BallsBalls.GameOver = function() {};

BallsBalls.GameOver.prototype = {
    create: function(){
        //Game Over text
        var text = "Game over!" ;
        var style = { font: "30px Arial", fill: "#fff", align: "center" };
        var t = this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY, text, style);
        //t.anchor.set(0.5);

        var savedHighscores = parseInt(localStorage.getItem('ballsballshighscores'));
        if ( savedHighscores ) {
            if ( savedHighscores >= parseInt(this.score) ) {
                // No new highscore
                var text = "Your score: " + this.score;
                var style = { font: "30px Arial", fill: "#fff", align: "center" };
                this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY + 50, text, style);

                var text = "Current highscore: " + savedHighscores;
                this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY + 100, text, style);
            } else {
                // A new highscore!
                var text = "You have a new highscore!: " + this.score;
                var style = { font: "30px Arial", fill: "#fff", align: "center" };
                this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY + 50, text, style);

                // Set new highscore
                localStorage.setItem('ballsballshighscores', this.score);
            }

        } else {
            // Add first highscore
            localStorage.setItem('ballsballshighscores', this.score);

            var text = "You have a new highscore!: " + this.score;
            var style = { font: "30px Arial", fill: "#fff", align: "center" };
            this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY + 50, text, style);
        }
    },
    update: function(){
        if (this.game.spaceKey.isDown) {
            BallsBalls.game.state.start('MainMenu');
        }
    }
};

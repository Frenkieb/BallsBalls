var BallsBalls = BallsBalls || {};

BallsBalls.GameOver = function(){};

BallsBalls.GameOver.prototype = {
    create: function(){
        //start game text
        var text = "Game over!";
        var style = { font: "30px Arial", fill: "#fff", align: "center" };
        var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
        t.anchor.set(0.5);
    },
    update: function(){
        if (this.game.input.activePointer.justPressed()) {
            BallsBalls.game.state.start('Game');
        }
    }
};

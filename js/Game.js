var BallsBalls = BallsBalls || {};

BallsBalls.Game = function(){};

BallsBalls.Game.prototype = {
    create: function(){
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
        this.player.enableBody = true;
        this.player.collideWorldBounds = true;
        this.player.animations.add('default', [0], 10, true)
        this.player.animations.add('shield', [1], 10, true)

        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.immovable = true;

        this.balls = this.game.add.group();
        this.balls.enableBody = true;
        this.balls.createMultiple(150, 'ball');

        //Enable cursor keys so we can create some controls
        cursors = this.game.input.keyboard.createCursorKeys();
        this.game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.ballsInGame = 0;
        this.worldBounces = 0;

        // Add the first ball
        this.addBall(this.game.world.randomX, this.game.world.randomY);
    },
    update: function(){
        // Collission between balls and player.
        this.game.physics.arcade.collide(this.balls, this.player, this.ballPlayerCollision, null, {this:this, game:this.game});

        this.player.animations.play('default');

        if (cursors.up.isDown) {
            this.player.y -= 4;
        }
        if (cursors.down.isDown) {
            this.player.y += 4;
        }
        if (cursors.left.isDown) {
            this.player.x -= 4;
        }
        if (cursors.right.isDown) {
            this.player.x += 4;
        }
        if (this.game.spaceKey.isDown) {
            this.player.animations.play('shield');
        }
    },
    addBall: function(x,y) {
        if ( this.ballsInGame < 150 ) {
            var ball = this.balls.getFirstDead(true, x, y, 'ball');
            ball.body.collideWorldBounds = true;
            ball.body.bounce.set(1);

            // Create a positive or negative multiplier.
            var multiplier = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            ball.body.velocity.setTo(Math.random() * 200 * multiplier, Math.random() * 200 * multiplier);

            ball.body.onWorldBounds = new Phaser.Signal();
            ball.body.onWorldBounds.add(this.ballWorldBounce, this);

            this.ballsInGame += 1;
        }
    },
    ballWorldBounce: function(object) {
        this.worldBounces += 1;

        // Add a ball when the square of the balls is the amount of worldBounces.
        if ( ( this.ballsInGame * this.ballsInGame ) == this.worldBounces ) {
            this.addBall(object.world.x, object.world.y);
        }
    },
    ballPlayerCollision: function() {
        if (!this.game.spaceKey.isDown) {
            BallsBalls.game.state.start('GameOver');
        }
    }

};

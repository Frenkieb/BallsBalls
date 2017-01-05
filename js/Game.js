var BallsBalls = BallsBalls || {};

BallsBalls.Game = function(){};

BallsBalls.Game.prototype = {
    create: function(){
        // Add player
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
        this.player.enableBody = true;
        this.player.collideWorldBounds = true;

        // Create player animations.
        this.player.animations.add('default', [0], 10, true)
        this.player.animations.add('shield', [1], 10, true)

        // Add physics to player.
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.immovable = true;

        // Add a group for balls.
        this.balls = this.game.add.group();
        this.balls.enableBody = true;
        this.balls.createMultiple(150, 'ball');

        //Enable cursor keys so we can create some controls
        this.game.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // Default game values.
        this.ballsInGame = 0;
        this.worldBounces = 0;
        this.shield = 100;

        // Add shield indicator.
        this.shieldText = this.game.add.text(10, 10, this.shield, { font: "15px Arial", fill: "#ffffff" });

        // Add the first ball
        this.addBall(this.game.world.randomX, this.game.world.randomY);
    },
    update: function(){
        // Collission between balls and player.
        this.game.physics.arcade.collide(this.balls, this.player, this.ballPlayerCollision, null, {this:this, game:this.game, shield:this.shield});

        // Default animation.
        this.player.animations.play('default');

        if (this.game.cursors.up.isDown) {
            this.player.y -= 4;
        }
        if (this.game.cursors.down.isDown) {
            this.player.y += 4;
        }
        if (this.game.cursors.left.isDown) {
            this.player.x -= 4;
        }
        if (this.game.cursors.right.isDown) {
            this.player.x += 4;
        }
        if (this.game.spaceKey.isDown) {
            // Shield only available when > 0.
            if (this.shield > 0) {
                this.shield -= 1;
                this.shieldText.text = this.shield;
                this.player.animations.play('shield');
            }
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

            // Add Signal when ball collides with world bounds.
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
        // Game over when: shield is not active, or shield active but empty.
        if (!this.game.spaceKey.isDown || this.shield == 0) {
            BallsBalls.game.state.start('GameOver');
        }
    }

};

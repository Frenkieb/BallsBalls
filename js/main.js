var BallsBalls = BallsBalls || {};
BallsBalls.game = new Phaser.Game(800, 600, Phaser.AUTO);

BallsBalls.game.state.add('Boot', BallsBalls.Boot);
BallsBalls.game.state.add('Preload', BallsBalls.Preload);
BallsBalls.game.state.add('MainMenu', BallsBalls.MainMenu);
BallsBalls.game.state.add('Game', BallsBalls.Game);
BallsBalls.game.state.add('GameOver', BallsBalls.GameOver);

BallsBalls.game.state.start('Boot');

/*
var player;
var balls;
var cursors;
var ballsInGame;
var worldBounces;

function preload() {
    game.load.image('ball', 'assets/ball.png');
    game.load.image('player', 'assets/player.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    player.enableBody = true;
    player.collideWorldBounds = true;

    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.immovable = true;

    balls = game.add.group();
    balls.enableBody = true;
    balls.createMultiple(150, 'ball');

    //Enable cursor keys so we can create some controls
    cursors = game.input.keyboard.createCursorKeys();

    startGame();
}

function update() {
    // Collission between balls and player.
    game.physics.arcade.collide(balls, player, gameOver);

    if (cursors.up.isDown) {
        player.y -= 4;
    }
    if (cursors.down.isDown) {
        player.y += 4;
    }
    if (cursors.left.isDown) {
        player.x -= 4;
    }
    if (cursors.right.isDown) {
        player.x += 4;
    }
}

function ballWorldBounce(object) {
    worldBounces += 1;

    // Add a ball when the square of the balls is the amount of worldBounces.
    if ( ( ballsInGame * ballsInGame ) == worldBounces ) {
        addBall(object.world.x, object.world.y);
    }
}

function addBall(x,y) {
    if ( ballsInGame < 150 ) {
        var ball = balls.getFirstDead(true, x, y, 'ball');
        ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1);

        // Create a positive or negative multiplier.
        var multiplier = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        ball.body.velocity.setTo(Math.random() * 200 * multiplier, Math.random() * 200 * multiplier);

        ball.body.onWorldBounds = new Phaser.Signal();
        ball.body.onWorldBounds.add(ballWorldBounce, 'x');

        ballsInGame += 1;
    }
}

function startGame() {
    ballsInGame = 0;
    worldBounces = 0;

    // Add the first ball
    addBall(game.world.randomX, game.world.randomY);
}

function gameOver() {
    console.log('Game over!');
}
*/

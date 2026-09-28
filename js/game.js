let score = 0;
let gameOver = false;

function checkCollision() {
    if (
        x < obstacleX + 30 &&
        x + 30 > obstacleX &&
        y < obstacleY + 30 &&
        y + 30 > obstacleY
    ) {
        gameOver = true;
        restartButton.style.display = "block";
    }
}

function update() {
    updatePlayer();
    updateObstacle();
    checkCollision();
}

function draw() {
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawPlayer();
    drawObstacle();

    context.font = "16px 'Press Start 2P'";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.textBaseline = "top";

    context.fillText(
        `SCORE: ${score}`,
        15,
        15
    );

    if (gameOver) {
        context.fillStyle = "rgba(255, 0, 0, 0.45)";
        context.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        context.font = "32px 'Press Start 2P'";
        context.fillStyle = "white";
        context.textAlign = "center";

        context.fillText(
            "GAME OVER",
            canvas.width / 2,
            canvas.height / 2
        );
    }
}

function gameLoop() {
    update();
    draw();

    if (!gameOver) {
        requestAnimationFrame(gameLoop);
    }
}

function restartGame() {
    x = 250;
    y = 250;

    vitX = 4;
    vitY = 0;

    obstacleX = 250;
    obstacleY = 150;

    obstacleVitX = 2.3;
    obstacleVitY = 1.7;

    score = 0;
    gameOver = false;

    restartButton.style.display = "none";

    gameLoop();
}
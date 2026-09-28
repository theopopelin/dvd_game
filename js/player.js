const player = new Image();
player.src = "img/heart.png";

let x = 250;
let y = 250;

let vitX = 4;
let vitY = 0;

const playerWidth = 60;
const playerHeight = 60;

const gravity = 0.5;
const jumpforce = -15;

function updatePlayer() {
    vitY += gravity;

    x += vitX;
    y += vitY;

    if (x >= 465) {
        x = 465;
        vitX = -vitX;
        score++;
    }

    if (x <= -35) {
        x = -35;
        vitX = -vitX;
        score++;
    }

    if (y >= 465) {
        y = 465;
        vitY = -vitY * 0.6;
    }

    if (y <= 0) {
        y = 0;
        vitY = -vitY * 0.1;
    }
}

function drawPlayer() {
    context.drawImage(
        player,
        x,
        y - 15,
        playerWidth,
        playerHeight
    );
}
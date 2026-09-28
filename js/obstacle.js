const couleurs = [
    "img/dvd-1.svg",
    "img/dvd-2.svg",
    "img/dvd-3.svg",
    "img/dvd-4.svg",
    "img/dvd-5.svg",
    "img/dvd-6.svg",
    "img/dvd-7.svg",
    "img/dvd-8.svg",
    "img/dvd-9.svg",
    "img/dvd-0.svg"
];

let obstacle = new Image();
obstacle.src = couleurs[0];

let obstacleX = 250;
let obstacleY = 150;

let obstacleVitX = 2.3;
let obstacleVitY = 1.7;

const obstacleWidth = 60;
const obstacleHeight = 60;

function changerCouleurObstacle() {
    const nouvelleCouleur =
        couleurs[Math.floor(Math.random() * couleurs.length)];

    obstacle = new Image();
    obstacle.src = nouvelleCouleur;
}

function updateObstacle() {
    obstacleX += obstacleVitX;
    obstacleY += obstacleVitY;

    if (obstacleX >= 440 || obstacleX <= 0) {
        obstacleVitX = -obstacleVitX * 1.05;
        changerCouleurObstacle();
    }

    if (obstacleY >= 470 || obstacleY <= 0) {
        obstacleVitY = -obstacleVitY * 1.05;
        changerCouleurObstacle();
    }
}

function drawObstacle() {
    context.drawImage(
        obstacle,
        obstacleX,
        obstacleY - 15,
        obstacleWidth,
        obstacleHeight
    );
}
const canvas = document.querySelector("#CanvasJeu");
const context = canvas.getContext("2d");

const restartButton = document.querySelector("#restartButton");

restartButton.addEventListener("click", restartGame);

function jump() {
    vitY = jumpforce;
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});

canvas.addEventListener("pointerdown", () => {
    jump();
});

document.fonts.ready.then(() => {
    gameLoop();
});
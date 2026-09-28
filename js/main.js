const canvas = document.querySelector("#CanvasJeu");
const context = canvas.getContext("2d");

const restartButton = document.querySelector("#restartButton");

restartButton.addEventListener("click", restartGame);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        vitY = jumpforce;
    }
});

document.fonts.ready.then(() => {
    gameLoop();
});
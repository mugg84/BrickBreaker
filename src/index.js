import Game from "./game";

// create game space
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

// setting space

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, 800, 600);

  game.update(deltaTime);

  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

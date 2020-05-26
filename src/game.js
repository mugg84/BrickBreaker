import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";

import { buildLevel, level1 } from "./levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(obj => obj.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(obj => obj.draw(ctx));
  }
}

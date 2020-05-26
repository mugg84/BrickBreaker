export default class InputHandler {
  constructor(paddle) {
    // if key is pressed
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;
      }
    });

    // if key released
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}

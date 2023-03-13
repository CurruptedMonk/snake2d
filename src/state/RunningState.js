export default class {
    #game;

    constructor(game) {
        this.#game = game;
    }

    update() {
        for (const actor of Object.values(this.#game.actors)) {
            actor.update();
        }

        if (this.#game.actors.snake.isEat(this.#game.actors.food.position)) {
            this.#game.actors.food.changePosition(this.#game.actors.snake.body);
            this.#game.actors.snake.growUp();
            this.#game.actors.score.increase();
            this.#game.actors.speed.increase();
        }
        if(this.#game.actors.snake.isDeathCollision()) {
            this.#game.setState(this.#game.gameOverState);
        }
    }

    draw() {
        for (const actor of Object.values(this.#game.actors)) {
            actor.draw();
        }
    }

    togglePause() {
        this.#game.setState(this.#game.pauseState);
    }

}
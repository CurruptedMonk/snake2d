export default class {
    #game;
    #framesCounter;
    #step;

    constructor(game) {
        this.#game = game;
        this.#framesCounter = 0;
        this.#step = 1;
        this.start = this.start.bind(this);
    }

    start() {
        requestAnimationFrame(this.start);
        this.#framesCounter += this.#step;
        if (this.#framesCounter < this.#game.actors.speed.skippedFramesLimit){
            return;
        }
        this.#framesCounter = 0;

        this.#game.draw();
        this.#game.update();
    }
}
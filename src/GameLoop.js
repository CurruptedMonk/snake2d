export default class {
    #game;;
    #framesCounter;
    #skipedFramesLimit;
    #step;

    constructor(game) {
        this.#game = game;
        this.#framesCounter = 0;
        this.#skipedFramesLimit = 16;
        this.#step = 1;
        this.start = this.start.bind(this);
    }

    start() {
        requestAnimationFrame(this.start);
        this.#framesCounter += this.#step;
        if (this.#framesCounter < this.#skipedFramesLimit){
            return;
        }
        this.#framesCounter = 0;

        this.#game.draw();
        this.#game.update();
    }
}
import Direction from "./Direction.js";

export default class {
    #layer;
    #blockSize;
    #x;
    #y;
    #direction

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#x = this.#layer.getWidth() /2;
        this.#y = this.#layer.getHeight() / 2;
        this.#direction = new Direction(blockSize);
    }

    update() {
        this.#direction.update();
        this.#x += this.#direction.x;
        this.#y += this.#direction.y;
    }

    draw() {
        this.#layer.getContext().fillStyle = "black";
        this.#layer.getContext().fillRect(this.#x, this.#y, this.#blockSize, this.#blockSize);
    }

    changeDirection(direction) {
       this.#direction.set(direction);
    }
}



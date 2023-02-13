import Direction from "./Direction.js";
import Block from "./Block.js";

export default class {
    #layer;
    #blockSize;
    #x;
    #y;
    #direction;
    #body;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#x = this.#layer.getWidth() /2;
        this.#y = this.#layer.getHeight() / 2;
        this.#direction = new Direction(blockSize);
        this.#body = [this.#createHead()];
    }

    update() {
        this.#direction.update();
        this.#updateHeadCoordinates();

        this.#body.unshift(this.#createHead());
        this.#body.pop();
    }

    draw() {
        for(const position of this.#body) {
            position.draw(this.#layer.getContext(), "black");
        }
    }

    changeDirection(direction) {
       this.#direction.set(direction);
    }

    #updateHeadCoordinates() {
        this.#x += this.#direction.x;
        this.#y += this.#direction.y;
    }

    #createHead() {
        return Block.create(this.#x, this.#y, this.#blockSize);
    }
}



import Block from "./Block.js";
import Position from "./Position.js";

export default class {
    #layer;
    #blockSize;
    #body;
    #position;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#position = new Position(
            (this.#layer.getWidth() /2) + (this.#blockSize * 4),
            this.#layer.getHeight() / 2
        )
        this.#body = Block.create(this.#position, this.#blockSize);
    }

    draw() {
        this.#body.draw(this.#layer.getContext(), "green");
    }

}

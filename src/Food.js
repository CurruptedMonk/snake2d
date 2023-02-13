import Block from "./Block.js";

export default class {
    #layer;
    #blockSize;
    #x;
    #y;
    #position;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#x = (this.#layer.getWidth() /2) + (this.#blockSize * 4);
        this.#y = this.#layer.getHeight() / 2;
        this.#position = Block.create(this.#x, this.#y, this.#blockSize);
    }

    draw() {
        this.#position.draw(this.#layer.getContext(), "green");
    }

}

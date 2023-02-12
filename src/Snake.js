export default class {
    #layer;
    #blockSize;
    #x;
    #y;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#x = this.#layer.getWidth() /2;
        this.#y = this.#layer.getHeight() / 2;
    }

    update() {
        this.#x += this.#blockSize;
    }

    draw() {
        this.#layer.getContext().fillStyle = "black";
        this.#layer.getContext().fillRect(this.#x, this.#y, this.#blockSize, this.#blockSize);
    }
}
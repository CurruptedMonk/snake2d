export default class {
    #layer;
    #blockSize;
    #x;
    #y;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#x = (this.#layer.getWidth() /2) + (this.#blockSize * 4);
        this.#y = this.#layer.getHeight() / 2;
    }

    draw() {
        this.#layer.getContext().fillStyle = "green";
        this.#layer.getContext().fillRect( this.#x, this.#y, this.#blockSize, this.#blockSize);
    }

}

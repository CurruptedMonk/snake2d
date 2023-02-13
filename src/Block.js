export default class Block{
    #x;
    #y;
    #size;

    constructor(x, y, size) {
        this.#x = x;
        this.#y = y;
        this.#size = size;
    }

    static create(x, y, size) {
        return new Block(x, y, size);
    }

    draw(context, color) {
        context.fillStyle = color;
        context.fillRect(this.#x, this.#y, this.#size, this.#size)
    }

    isEqual(otherBlock) {
        return this.#x === otherBlock.x
            && this.#y === otherBlock.y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}
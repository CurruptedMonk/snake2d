export default class Block{
    #position;
    #size;

    constructor(position, size) {
        this.#position = position;
        this.#size = size;
    }

    static create(position, size) {
        return new Block(position, size);
    }

    draw(context, color) {
        context.fillStyle = color;
        context.fillRect(
            this.#position.x,
            this.#position.y,
            this.#size,
            this.#size
        )
    }

    checkPositionMatches(otherPosition) {
        return this.#position.isEqual(otherPosition);
    }

    get position() {
        return this.#position;
    }
}
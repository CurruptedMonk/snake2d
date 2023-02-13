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

    get position() {
        return this.#position;
    }

    changePosition(snakeBody) {
        let newPosition;
        do {
            const newX= this.#randomPosition(this.#layer.getWidth(), this.#blockSize);
            const newY = this.#randomPosition(this.#layer.getHeight(), this.#blockSize);
            newPosition = new Position(newX, newY);
        } while (this.#isBlockPositionOccupied(snakeBody, newPosition));

        this.#position = newPosition;
        this.#body = Block.create(this.#position, this.#blockSize);
    }

    #randomPosition(axisLength, blockSize) {
        return Math.floor(Math.random() * (axisLength / blockSize)) * blockSize;
    }

    #isBlockPositionOccupied(blocks, position) {
        return blocks.some(piece => piece.checkPositionMatches(position));
    }
}

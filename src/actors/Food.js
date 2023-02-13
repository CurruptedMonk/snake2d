import Block from "../Block.js";
import Position from "../Position.js";

export default class {
    #layer;
    #blockSize;
    #body;
    #position;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#position = new Position(
            (this.#layer.width /2) + (this.#blockSize * 4),
            this.#layer.width / 2
        )
        this.#body = Block.create(this.#position, this.#blockSize);
    }

    draw() {
        this.#body.draw(this.#layer.context, "green");
    }

    update() {

    }

    get position() {
        return this.#position;
    }

    changePosition(snakeBody) {
        let newPosition;
        do {
            const newX= this.#randomPosition(this.#layer.width, this.#blockSize);
            const newY = this.#randomPosition(this.#layer.height, this.#blockSize);
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

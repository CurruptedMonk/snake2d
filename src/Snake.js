import Direction from "./Direction.js";
import Block from "./Block.js";
import Position from "./Position.js";

export default class {
    #layer;
    #blockSize;
    #direction;
    #body;
    #position;

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#position = new Position(
            this.#layer.width /2,
            this.#layer.width / 2
        )
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
        for(const piece of this.#body) {
            piece.draw(this.#layer.context, "black");
        }
    }

    changeDirection(direction) {
       this.#direction.set(direction);
    }

    isEat(foodPosition) {
        return this.#position.isEqual(foodPosition);
    }

    get body() {
        return this.#body;
    }

    #updateHeadCoordinates() {
        const newX = this.#position.x + this.#direction.position.x;
        const newY = this.#position.y + this.#direction.position.y;

        this.#position = new Position(
            newX,
            newY
        )
    }

    #createHead() {
        return Block.create(this.#position, this.#blockSize);
    }
}



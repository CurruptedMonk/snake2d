export default class {
    #canvas;
    #context;

    constructor(htmlParent, width, height, color) {
        this.#canvas = document.createElement("canvas");
        this.#canvas.style.position = "absolute";
        this.#context = this.#canvas.getContext("2d");
        this.#canvas.width = width;
        this.#canvas.height = height;
        this.#context.fillStyle = color;
        this.#context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
        htmlParent.insertAdjacentElement("beforeend", this.#canvas);
    }

    clear() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    get width() {
        return this.#canvas.width;
    }

    get height() {
        return this.#canvas.height;
    }

    get context() {
        return this.#context;
    }
}
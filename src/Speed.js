export default class{
    #layer;
    #min;
    #max;
    #skippedFramesLimit;
    #current;

    constructor(layer) {
        this.#layer = layer;
        this.#min = 15;
        this.#max = 2;
        this.#skippedFramesLimit = this.#min;
        this.#current = 1;
    }

    increase() {
        if (this.#skippedFramesLimit >= this.#max) {
            this.#skippedFramesLimit -= 0.25;
            this.#current += 0.25;
        }
    }

    get skippedFramesLimit() {
        return this.#skippedFramesLimit;
    }

    update() {

    }

    draw() {
        this.#layer.context.font = "30px 'New Tegomin'";
        this.#layer.context.fillStyle = "black";
        this.#layer.context.textAlign = "center";
        this.#layer.context.fillText(`Speed: ${this.#current.toFixed(2)}`, this.#layer.width /1.2, this.#layer.height / 16);
    }
}
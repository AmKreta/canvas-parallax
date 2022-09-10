import BackgroundLayer from "./backgroundLayer.class.js";

// layers = string[]
// staticIndex = set
class Background {
    constructor({ ctx, layers, staticIndex }) {
        this.ctx = ctx;
        this.scrollSpeed = 1;
        this.layers = layers.map((layer, index) => new BackgroundLayer({
            ctx,
            layer,
            scrollSpeed: staticIndex?.has(index) ? 0 : index,
        }))
    }

    draw() {
        this.layers.forEach(layer => layer.draw());
    }
};

export default Background;
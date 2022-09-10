import { canvas_height, canvas_width } from "../index.js";

class BackgroundLayer {
    constructor({ ctx, layer, scrollSpeed = 0 }) {
        this.ctx = ctx;
        this.layer = layer;
        this.scrollSpeed = scrollSpeed;
        this.x_pos = 0;
    }

    draw() {
        this.ctx.drawImage(this.layer, this.x_pos, 0, canvas_width, canvas_height);
        this.ctx.drawImage(this.layer, canvas_width+this.x_pos, 0, canvas_width, canvas_height);
        this.update();
    }

    update() {
        this.x_pos -= this.scrollSpeed
        if(this.x_pos<=-canvas_width)
            this.x_pos=0;
    }
}


export default BackgroundLayer;
import { canvas_height, canvas_width } from "../index.js";
import { getRandomNumberBetween, loadImage } from "../util/util.js";

const img = loadImage({ src: './assets/bird/bird.png' });

export function createRandomBirdParams() {
    const size = getRandomNumberBetween(60, 250);
    const pos_x = getRandomNumberBetween(0, canvas_width - 2 * size);
    const pos_y = getRandomNumberBetween(0, canvas_height - 2 * size);
    const delay = getRandomNumberBetween(0, 20);
    return { pos_x, pos_y, size, delay };
}

class Bird {
    constructor({ ctx, type = 1, size = 100, pos_x = 0, pos_y = 0, delay = 0 }) {
        this.ctx = ctx;
        this.type = type;
        this.frameWidth = 350;
        this.frameHeight = 350;
        this.currentFrame_x = 1;
        this.currentFrame_y = 1;
        this.speed = 1;
        this.size = size;
        this.speedLimit = 5;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.delay = delay;
    }


    draw() {
        let sx = this.frameWidth * (this.currentFrame_x - 1);
        let sy = this.frameHeight * (this.currentFrame_y - 1);
        this.ctx.drawImage(img, sx, sy, this.frameWidth, this.frameHeight, this.pos_x, this.pos_y, this.size, this.size);
        this.update();
    }

    update() {
        if (this.delay-- > 0) return;

        this.speed++;
        if (this.speed >= this.speedLimit) {
            this.speed = 0;
            this.currentFrame_x++;
            if (this.currentFrame_x > 3) {
                this.currentFrame_x = 1;
                this.currentFrame_y++;
                if (this.currentFrame_y > 3)
                    this.currentFrame_y = 1;
            }
        }
    }

}

export default Bird;
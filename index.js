import Bird, { createRandomBirdParams } from './sprites/bird.sprite.js';
import Background from './util/background.class.js';
import { loadAllImagesInArray } from './util/util.js';

let ctx;
let canvas;
let canvas_height;
let canvas_width;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
    canvas_height = canvas.height = window.innerHeight;
    canvas_width = canvas.width = window.innerWidth;
}

function main() {
    init();
    const backgroundlayers = [];
    for (let i = 1; i <= 5; i++)
        backgroundlayers.push(`./assets/backgrounds/mountain/layers/parallax-mountain-layer (${i}).png`);
    const layers = loadAllImagesInArray(backgroundlayers);
    const background = new Background({ ctx, layers, staticIndex: new Set([0]) });
    const birdArr = Array.from(Array(5)).map(() => new Bird({ ctx, ...createRandomBirdParams() }));
    console.log(birdArr)
    function animate() {
        ctx.clearRect(0, 0, canvas_width, canvas_width);
        background.draw();
        birdArr.forEach(bird => bird.draw());
        requestAnimationFrame(animate);
    }

    animate();
}

window.onload = main;


export {
    ctx,
    canvas,
    canvas_height,
    canvas_width
};
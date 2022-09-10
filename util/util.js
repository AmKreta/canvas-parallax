function loadImage({ src }) {
    const image = new Image();
    image.src = src;
    return image;
}

function loadAllImagesInArray(srcs = []) {
    return srcs.map(src => loadImage({ src }));
}

function getSrcArrayFromAnimationName({ src, animationName, numFrames, format = 'png' }) {
    let frameSrc = [];
    for (let i = 1; i <= numFrames; i++)
        frameSrc.push(loadImage({
            src: `./assets/${src}/${animationName} (${i}).${format}`
        }));
    return frameSrc;
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export {
    loadImage,
    loadAllImagesInArray,
    getSrcArrayFromAnimationName,
    getRandomNumberBetween
}
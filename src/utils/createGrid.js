let canvas, ctx

const sizeCanvas = (element) => {
    let width = element.offsetWidth;
    let height = element.offsetHeight;

    element.width = width;
    element.height = height;
}

const createGrid = (component) => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d")

    sizeCanvas(canvas)

    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.beginPath()
    ctx.rect(0,0,50,50);
    ctx.stroke()
}

export default createGrid;
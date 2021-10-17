let canvas, ctx

const sizeCanvas = (element) => {
    let width = element.offsetWidth;
    let height = element.offsetHeight;

    element.width = width;
    element.height = height;
}

const printMainAxis = (width, height) => {
    ctx.save()
    ctx.lineWidth = 2;

    ctx.beginPath()
    ctx.moveTo(-width, 0)
    ctx.lineTo(width, 0)
    ctx.moveTo(0, -height)
    ctx.lineTo(0, height)
    ctx.stroke()

    ctx.restore()
}

const printGrid = () => {
    let width = canvas.width / 2
    let height = canvas.height / 2
    ctx.translate(width, height)

    printMainAxis(width, height)
}

const createGrid = (component) => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d")

    sizeCanvas(canvas)
    printGrid()
    
    canvas.addEventListener("resize", () => {
        sizeCanvas(canvas)
        printGrid()
    })
}

export default createGrid;
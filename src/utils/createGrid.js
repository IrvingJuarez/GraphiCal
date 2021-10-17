let canvas, ctx, size = 25

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

const everyFiveLines = (variable) => {
    if(variable % 125 == 0){
        ctx.save()
        ctx.lineWidth = 1;
        ctx.stroke()
        ctx.restore()
    }else{
        ctx.stroke()
    }
}

const printVerticalLines = (width, height) => {
    ctx.strokeStyle = "rgba(0,0,0,0.5)";
    ctx.lineWidth = 0.5;

    for(let x = size; x < width; x += size){
        ctx.beginPath()
        ctx.moveTo(x, -height)
        ctx.lineTo(x, height)
        everyFiveLines(x)
    }

    for(let x2 = -size; x2 > -width; x2 -= size){
        ctx.beginPath()
        ctx.moveTo(x2, -height)
        ctx.lineTo(x2, height)
        everyFiveLines(x2)
    }
}

const printHorizontalLines = (width, height) => {
    for(let y = size; y < width; y += size){
        ctx.beginPath()
        ctx.moveTo(-width, y)
        ctx.lineTo(width, y)
        everyFiveLines(y)
    }

    for(let y2 = -size; y2 > -height; y2 -= size){
        ctx.beginPath()
        ctx.moveTo(-width, y2)
        ctx.lineTo(width, y2)
        everyFiveLines(y2)
    }
}

const printGrid = () => {
    let width = canvas.width / 2
    let height = canvas.height / 2
    ctx.translate(width, height)

    printMainAxis(width, height)
    printVerticalLines(width, height)
    printHorizontalLines(width, height)
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
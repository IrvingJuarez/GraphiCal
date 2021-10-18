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

const everyFiveLines = (variable, textX, textY) => {
    if(variable % (size * 5) == 0){
        ctx.fillText(variable / size, textX, textY)

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
        everyFiveLines(x, x - 5, 17)
    }

    for(let x2 = -size; x2 > -width; x2 -= size){
        ctx.beginPath()
        ctx.moveTo(x2, -height)
        ctx.lineTo(x2, height)
        // ctx.stroke()
        everyFiveLines(x2, x2 - 5, 17)
    }
}

const printHorizontalLines = (width, height) => {
    for(let y = size; y < width; y += size){
        ctx.beginPath()
        ctx.moveTo(-width, y)
        ctx.lineTo(width, y)
        // ctx.stroke()
        everyFiveLines(-y, 10, y + 5)
    }

    for(let y2 = -size; y2 > -height; y2 -= size){
        ctx.beginPath()
        ctx.moveTo(-width, y2)
        ctx.lineTo(width, y2)
        // ctx.stroke()
        everyFiveLines(-y2, 10, y2 + 5)
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
    ctx.font = '500 1.7rem serif';
    printGrid()
    
    canvas.addEventListener("resize", () => {
        sizeCanvas(canvas)
        printGrid()
    })
}

export default createGrid;
export { ctx, size }
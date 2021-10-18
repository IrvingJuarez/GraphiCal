import { ctx } from "./createGrid"

const printDot = (x, y) => {
    ctx.fillStyle = "#0579D1"
    ctx.arc(x, y, 5, 0, Math.PI * 2)
    ctx.fill()
}

export default printDot;
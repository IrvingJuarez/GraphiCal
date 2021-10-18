import { ctx, size } from "./createGrid"

const printDot = (x, y) => {
    ctx.fillStyle = "#0579D1";
    x *= size;
    y *= size;
    y *= -1;

    ctx.beginPath()
    ctx.arc(x, y, 5, 0, Math.PI * 2)
    ctx.fill()
}

export default printDot;
import { ctx2 } from "./createGrid"
const radius = 5, startAngle = 0, endAngle = Math.PI * 2

class Coordinate {
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.draw = this.draw.bind(this)
    }

    draw(c){
        ctx2.beginPath()
        ctx2.arc(this.x, this.y, radius, startAngle, endAngle)
        ctx2.fill()

        c.state.coordinates.push(this)
        c.xaxis.value = ""
        c.yaxis.value = ""
        c.setState({
            abled: false
        })
        // console.log(c)
    }
}

const printDot = (x, y, component) => {
    console.log(ctx2)
    let newCoor = new Coordinate(x, y, component)
    newCoor.draw(component)
}

export default printDot;
export { radius, startAngle, endAngle }
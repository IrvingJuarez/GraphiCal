import React from "react"

import { ctx2 } from "../utils/createGrid"
import { radius, startAngle, endAngle } from "../utils/printDot"

import "../styles/Point.scss"

class Point extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // ctx.beginPath()
        ctx2.globalCompositeOperation = 'destination-out'
        ctx2.arc(this.props.x, this.props.y, radius, startAngle, endAngle);
        ctx2.fill();
    }

    render(){
        return(
            <article className="point">
                <div>
                    <i></i>
                    <p>[ {this.props.x}, {this.props.y} ]</p>
                </div>

                <button onClick={this.handleClick}>X</button>
            </article>
        )
    }
}

export default Point
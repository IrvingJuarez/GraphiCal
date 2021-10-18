import React from "react"

import { ctx } from "../utils/createGrid"
import { radius, startAngle, endAngle } from "../utils/printDot"

import "../styles/Point.scss"

class Point extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // ctx.beginPath()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.arc(this.props.x, this.props.y, radius, startAngle, endAngle);
        ctx.fill();
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
import React from "react"

import { ctx2, size } from "../utils/createGrid"
import { radius, startAngle, endAngle } from "../utils/printDot"

import "../styles/Point.scss"

class Point extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        ctx2.clearRect(this.props.x * size - radius, this.props.y * size * -1 - radius, radius * 2, radius * 2)
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
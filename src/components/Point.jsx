import React from "react"

import { ctx2, size } from "../utils/createGrid"
import { radius } from "../utils/printDot"

import "../styles/Point.scss"

class Point extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        let x = this.props.x * size - radius
        let y = this.props.y * size * -1 - radius
        let arr = this.props.c.state.coordinates

        ctx2.clearRect(x, y, radius * 2, radius * 2)

        arr.forEach(dot => {
            if(dot.x == x + 5 && dot.y == y + 5){
                let index = arr.indexOf(dot)
                arr.splice(index, 1)
                this.props.c.setState({
                    abled: false
                })
            }
        });
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
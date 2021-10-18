import React from "react";

import createGrid from "../utils/createGrid";

import "../styles/Plane.scss";

class Plane extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        createGrid()
    }

    render(){
        return(
            <section className="canvas-container">
                <canvas className="canvas_grid"></canvas>
                <canvas className="canvas_layer"></canvas>
            </section>
        )
    }
}

export default Plane;
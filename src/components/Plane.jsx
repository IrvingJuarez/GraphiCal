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
            <canvas></canvas>
        )
    }
}

export default Plane;
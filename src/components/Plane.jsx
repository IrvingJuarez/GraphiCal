import React from "react";

import "../styles/Plane.scss";

class Plane extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <canvas></canvas>
        )
    }
}

export default Plane;
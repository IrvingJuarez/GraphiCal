import React from "react";
import Plane from "./Plane";
import InputField from "./InputField";

import "../styles/Home.scss";

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Plane />
                <InputField />
            </React.Fragment>
        )
    }
}

export default Home;
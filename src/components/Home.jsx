import React from "react";
import Plane from "./Plane";
import InputField from "./InputField";

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <main>
                <Plane />
                <InputField />
            </main>
        )
    }
}

export default Home;
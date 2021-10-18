import React from "react";
import Point from "./Point"

import printDot from "../utils/printDot"
import { size } from "../utils/createGrid"

import "../styles/InputField.scss";

class InputField extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            abled: false,
            coordinates: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleRequest(){
        printDot(this.xaxis.value * size, this.yaxis.value * size * -1, this)
    }

    renderBtn(){
        if(this.state.abled){
            return(
                <input type="button" value="Print" onClick={this.handleRequest}/>
            )
        }else{
            return(
                <input type="button" value="Print" className="disabled"/>
            )
        }
    }

    renderCoordinates(){
        if(this.state.coordinates.length >= 1){
            for(let i = 0; i < this.state.coordinates.length; i++){
                return(
                    <Point />
                )
            }
        }
    }

    handleChange(){
        if(this.xaxis.value && this.yaxis.value){
            this.setState({
                abled: true
            })
        }
    }
    
    componentDidMount(){
        this.xaxis = document.querySelector("#xAxis")
        this.yaxis = document.querySelector("#yAxis")
    }

    render(){
        return(
            <section className="input-field">
                <article className="input-field_header">
                    <form>
                        <section className="input-field_header-inputs">
                            <div>
                                <input type="number" name="x-axis" id="xAxis" placeholder="X: " onChange={this.handleChange} />
                                {/* <input type="text" name="x-axis" id="x-axis" placeholder="X: "/> */}
                            </div>

                            <div>
                                <input type="number" name="y-axis" id="yAxis" placeholder="Y: " onChange={this.handleChange} />
                                {/* <input type="text" name="y-axis" id="y-axis" placeholder="Y: "/> */}
                            </div>
                        </section>

                        {this.renderBtn()}
                    </form>
                </article>

                {this.renderCoordinates()}
            </section>
        )
    }
}

export default InputField;
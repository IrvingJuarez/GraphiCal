import React from "react";

import "../styles/InputField.scss";

class InputField extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="input-field">
                <article className="input-field_header">
                    <form>
                        <section className="input-field_header-inputs">
                            <div>
                                {/* <label htmlFor="x-axis">X: </label> */}
                                <input type="text" name="x-axis" id="x-axis" placeholder="X: "/>
                            </div>

                            <div>
                                {/* <label htmlFor="y-axis">Y: </label> */}
                                <input type="text" name="y-axis" id="y-axis" placeholder="Y: "/>
                            </div>
                        </section>

                        <input type="button" value="Print" />
                    </form>
                </article>
            </section>
        )
    }
}

export default InputField;
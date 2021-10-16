import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

import "../styles/App.scss";

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Layout>            
            </BrowserRouter>
        )
    }
}

export default App;
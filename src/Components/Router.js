import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV"; 
import Search from "../Routes/Search"; 

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/search" component={Search} /> 
            <Route path="/tv" exact component={TV} />    
            <Redirect from="*" to="/" />   
        </Switch>
    </Router>
    )

    // Switch shows only 1 not more than 2

import React from "react";

import { Switch, Route } from "react-router-dom";
import Article from "./article";
import Help from './help'
import Home from "./home";
import Singlearticle from "./singlearticle";


export default function Main() {


    return (

        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/article">
                <Article />
            </Route>
            <Route path="/help">
                <Help />
            </Route>
            <Route path='/a/:id' component={Singlearticle} />
        </Switch>

    )
}

import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Detail from "./Detail"
import Home from "./Home"
import Navigation from './Navigation'

export default class MyApp extends Component {

    render() {
        return (
            <>
            <Navigation></Navigation>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/" component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </>
        )
    }
}

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPageIndex from "../mainPage/MainPageIndex";
import UserContainer from "../UserContainer";

export default class MainRouter extends Component{
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={MainPageIndex}/>
                    <Route path='/user' component={UserContainer}/>
                </Switch>
            </main>
        )
    }
}
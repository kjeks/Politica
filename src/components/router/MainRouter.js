import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPageIndex from "../mainPage/MainPageContainer";
import UserContainer from "../UserContainer";
import MainMenu from "../mainPage/MainMenu";

export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <MainMenu/>
                <main>
                    <Switch>
                        <Route exact path='/' component={MainPageIndex}/>
                        <Route path='/user' component={UserContainer}/>
                    </Switch>
                </main>
            </div>
        )
    }
}
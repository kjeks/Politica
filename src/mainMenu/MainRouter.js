import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPageIndex from "../home/components/HomeContainer";
import UserContainer from "../user/components/UserContainer";
import MainMenu from "./MainMenu";

export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <MainMenu/>
                <main className="main-content">
                    <Switch>
                        <Route exact path='/' component={MainPageIndex}/>
                        <Route path='/user' component={UserContainer}/>
                    </Switch>
                </main>
            </div>
        )
    }
}
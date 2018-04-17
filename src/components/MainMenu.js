import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'

export default class MainMenu extends PureComponent {
    render() {
        return (
            <nav className="main-navigation">
                <Link to="/" className="main-navigation__navigation-item">Main</Link>
                <Link to="/user" className="main-navigation__navigation-item">User</Link>
            </nav>
        )
    }
}

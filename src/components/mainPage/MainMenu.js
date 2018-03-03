import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'

export default class MainMenu extends PureComponent {
    render() {
        return (
            <nav className="main-navigation">
                <Link to="/" className="navigation-item">Main</Link>
                <Link to="/user" className="navigation-item">User</Link>
            </nav>
        )
    }
}
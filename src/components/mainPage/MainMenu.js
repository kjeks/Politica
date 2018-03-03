import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'

export default class MainMenu extends PureComponent {
    render() {
        return (
            <nav className="main-navigation">
                <Link to="/" className="main">Main</Link>
                <Link to="/user">User</Link>
            </nav>
        )
    }
}
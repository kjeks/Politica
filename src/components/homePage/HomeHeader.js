import React, {PureComponent} from 'react';

export default class HomeHeader extends PureComponent {
    render () {
        return (
            <div className="home-header">
                <div className='title'>{"Welcome to Discussio"}</div>
            </div>
        )
    }
}
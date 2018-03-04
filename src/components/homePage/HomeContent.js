import React, {PureComponent} from 'react';

export default class HomeContent extends PureComponent {
    render () {
        return (
            <div className='home-content'>
                <div className="description">
                    {this.props.content.text}
                </div>
            </div>
        )
    }
}
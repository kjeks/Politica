import React, {PureComponent} from 'react';

export default class MainHeader extends PureComponent {
    render () {
        return (
            <div className="main-header">
                <div className='main-header__title'>{this.props.title}</div>
                <span className='main-header__sub-category'>{this.props.subCategory}</span>
            </div>
        )
    }
}
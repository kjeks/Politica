import React, {PureComponent} from 'react';
import cx from 'classnames';

export default class Button extends PureComponent {
    createClassName = () => {
        return cx('button', this.props.className, this.props.type);
    };
    render () {
        return (
            <button className={cx(this.createClassName())} onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}
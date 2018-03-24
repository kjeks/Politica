import React, {PureComponent} from 'react';
import cx from 'classnames';

export default class Checkbox extends PureComponent {
    render () {
        return (
            <div className={'checkbox-container'}>
                <div className={"checkbox-label"}>{this.props.label}</div>
                <span onClick={this.props.onClick}>
                    <div className={cx(["checkbox", {selected: this.props.selected}])}/>
                    <i className="fas fa-check"/>
                </span>
            </div>
        )
    }
}
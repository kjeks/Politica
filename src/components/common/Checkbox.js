import React, {PureComponent} from 'react';
import cx from 'classnames';

export default class Checkbox extends PureComponent {
    render () {
        return (
            <div className={'labeled-checkbox'}>
                <div className={"labeled-checkbox__checkbox-label"}>{this.props.label}:</div>
                <span onClick={this.props.onClick} className={"labeled-checkbox__checkbox-container"}>
                    <div className={cx(["checkbox", {'checkbox--selected': this.props.selected, 'checkbox--changed': this.props.changed}])}/>
                    <i className="fas fa-check"/>
                </span>
            </div>
        )
    }
}
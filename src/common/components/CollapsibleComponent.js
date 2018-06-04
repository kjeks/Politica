import React, {Component} from 'react';
import cx from 'classnames';

export default class CollapsibleComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {isOpen: false}
    };
    onClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    };
    render () {
        const collapsibleIcon = this.state.isOpen ? <i className="fas fa-angle-down"/> : <i className="fas fa-angle-right"/>;
        return (
            <div className={cx(['collapsible-component', this.props.className])}>
                <div className='collapsible-component__title' onClick={this.onClick}>{collapsibleIcon}{this.props.title}</div>
                {this.state.isOpen && this.props.children}
            </div>
        )
    }
}
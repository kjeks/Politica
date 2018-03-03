import React, {PureComponent} from 'react';

export default class MainPage extends PureComponent {
    render() {
        return (
            <div onClick={this.props.initialize}>
                MainPage
            </div>)
    }
}
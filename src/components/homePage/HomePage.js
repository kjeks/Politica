import React, {PureComponent} from 'react';
import HomeMenu from "./HomeMenu";

export default class MainPage extends PureComponent {
    componentWillMount = () => {
        this.props.initialize();
    };
    render() {
        return (
            <div>
                {this.props.homeMenu && <HomeMenu homeMenu={this.props.homeMenu} itemClicked={this.props.itemClicked}/>}
            </div>)
    }
}

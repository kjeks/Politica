import React, {PureComponent} from 'react';
import HomeMenu from "./HomeMenu";
import HomeContent from "./HomeContent";

export default class MainPage extends PureComponent {
    componentWillMount = () => {
        this.props.initialize();
    };
    render() {
        return (
            <div>
                {this.props.homeMenu && <HomeMenu homeMenu={this.props.homeMenu} itemClicked={this.props.itemClicked}/>}
                {this.props.homeContent && <HomeContent content={this.props.homeContent}/>}
            </div>)
    }
}

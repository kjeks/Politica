import React, {PureComponent} from 'react';
import HomeMenu from "./HomeMenu";
import HomeContent from "./HomeContent";
import HomeHeader from "./HomeHeader";

export default class MainPage extends PureComponent {
    render() {
        return (
            <div className='home-main'>
                <HomeHeader/>
                <div className="home-container">
                    {this.props.homeMenu && <HomeMenu homeMenu={this.props.homeMenu} itemClicked={this.props.itemClicked}/>}
                    {this.props.content && <HomeContent content={this.props.content}/>}
                </div>
            </div>)
    }
}

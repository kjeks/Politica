import React, {PureComponent} from 'react';
import HomeMenu from "./HomeMenu";
import HomeContent from "./HomeContent";
import MainHeader from "../../common/components/MainHeader";

export default class MainPage extends PureComponent {
    render() {
        return (
            <div className='home-main'>
                <MainHeader title={'welcome to discussio'}/>
                <div className="home-container">
                    {!!this.props.homeMenuItem.get('homeMenu') && <HomeMenu homeMenuItem={this.props.homeMenuItem} itemClicked={this.props.itemClicked}/>}
                    {this.props.content && <HomeContent content={this.props.content}/>}
                </div>
            </div>)
    }
}

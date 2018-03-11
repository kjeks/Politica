import React, {PureComponent} from 'react';
import UserInfo from "./UserInfo";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

export default class UserPage extends PureComponent {
    componentWillMount = () => {
        this.props.initialize();
    };
    render() {
        return (
            <div className="user-content">
                <UserHeader/>
                {this.props.user && <UserInfo
                    userValueChange={this.props.userValueChange}
                    userTopicChange={this.props.userTopicChange}
                    user={this.props.user}
                />}
                <UserFooter/>
            </div>
        )
    }
}
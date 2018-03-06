import React, {PureComponent} from 'react';
import UserInfo from "./UserInfo";
import UserFooter from "./UserFooter";

export default class UserPage extends PureComponent {
    render() {
        return (
            <div className="user-content">
                <UserInfo/>
                <UserFooter/>
            </div>
        )
    }
}
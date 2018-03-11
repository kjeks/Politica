import React, {PureComponent} from 'react';
import cx from 'classnames';
import UserTopics from "./UserTopics";

export default class UserInfo extends PureComponent {
    firstNameChange = (value) =>{
        const name = value.target.value;
        this.props.userValueChange(name, 'name');
    };
    render () {
        const {user} = this.props;
        return (
            <div className="user-info">
                <div className="input-label">name:</div>
                <input className={cx('input', {'changed': user.isNameChanged()})}
                       defaultValue={user.initialName}
                       onChange={this.firstNameChange}/>
                <UserTopics topics={user.topics} userTopicChange={this.props.userTopicChange}/>
            </div>
        )
    }
}
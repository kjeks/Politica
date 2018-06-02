import React, {PureComponent} from 'react';
import Button from "../../common/components/Button";

export default class UserFooter extends PureComponent {
    render() {
        return (
            <div className='user-footer'>
                <div className='user-footer__button-group'>
                    <Button text="save" type='save' onClick={this.props.saveChanges}/>
                    <Button text="cancel" type="cancel" onClick={this.props.cancelChanges}/>
                </div>
            </div>
        )
    }
}
import React, {PureComponent} from 'react';
import cx from 'classnames';

export default class HomeMenu extends PureComponent {
    itemClicked = (itemId) => {
        this.props.itemClicked(itemId);
};
    render() {
        const menuItems = this.props.homeMenuItem.get('homeMenu').map((menuItem, index) => {
            return <div
                className={cx("menu-item", {'menu-item--selected': menuItem.get('id') === this.props.homeMenuItem.get('selectedId')})}
                key={index}
                onClick={()=> {this.props.itemClicked(menuItem.get('id'))}}
            >
                <div className='menu-item__text'>{menuItem.get('name')}</div>
            </div>
        });
        return (
            <div className="home-menu">
                {menuItems.toList()}
            </div>
        )
    }
}

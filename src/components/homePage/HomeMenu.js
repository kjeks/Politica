import React, {PureComponent} from 'react';
import cx from 'classnames';

export default class HomeMenu extends PureComponent {
    itemClicked = (itemId) => {
        this.props.itemClicked(itemId);
};
    render() {
        const menuItems = this.props.homeMenu.menuItems.map((menuItem, index) => {
            return <div
                className={cx("menu-item", {selected: menuItem.id === this.props.homeMenu.selectedId})}
                key={index}
                onClick={()=> {this.props.itemClicked(menuItem.id)}}
            >
                <div className='text'>{menuItem.name}</div>
            </div>
        });
        return (
            <div className="home-menu">
                {menuItems.toList()}
            </div>
        )
    }
}

import React, {PureComponent} from 'react';
import Button from "../../common/components/Button";
import {Link} from 'react-router-dom';

export default class HomeContent extends PureComponent {
    render () {
        return (
            <div className='home-content'>
                <div className="description">
                    {this.props.content.get('text')}
                </div>
                <Link className='button' to="/discussion/new"> create new discussion</Link>
            </div>
        )
    }
}